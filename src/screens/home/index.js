import React, { useState, useEffect } from "react";
//local
import "./Home.scss";
import { Card } from "../../components/elements";
import { Button, Input } from "../../components/commons";
import { getWatchMovies } from "../../api";

const Home = () => {
	const [watchList, setWatchList] = useState(getWatchMovies());
	const [alreadyList, setAlreadyList] = useState([]);
	const [stateTitle, setStateTitle] = useState("");
	const [stateImage, setStateImage] = useState("");
	const [stateComment, setStateComment] = useState("");

	const titleInputChange = e => {
		setStateTitle(e.target.value);
	};
	const imageInputChange = e => {
		setStateImage(e.target.value);
	};
	const commentInputChange = e => {
		setStateComment(e.target.value);
	};

	const addMovie = (title, img, comment) => {
		let movie = {};
		movie.id = Math.random();
		movie.title = title;
		movie.image = img;
		movie.comment = comment;
		let data = [...alreadyList];
		data.push(movie);
		setAlreadyList(data);
	};
	const removeCard = item => {
		const data = alreadyList.filter(itm => itm.id !== item.id);
		setAlreadyList(data);
	};
	return (
		<div className="home container">
			<h1>Codest Movies!</h1>
			<section className="add">
				<h2 className="add__title">Add movie!</h2>
				<Input
					value={stateTitle}
					onChange={titleInputChange}
					placeholder="Title"
				/>
				<Input
					value={stateImage}
					onChange={imageInputChange}
					placeholder="Image URL"
				/>
				<Input
					value={stateComment}
					onChange={commentInputChange}
					placeholder="Comment"
				/>
				<Button
					title="ADD MOVIE"
					onClick={() =>
						addMovie(stateTitle, stateImage, stateComment)
					}
				/>
			</section>
			<div className="cards">
				<h3 className="cards__title">Watchlist</h3>
				{watchList &&
					watchList.map(item => <Card item={item} key={item.id} />)}
			</div>
			<div className="cards">
				<h3 className="cards__title">Already watched</h3>
				{alreadyList &&
					alreadyList.map(item => (
						<Card
							item={item}
							key={item.id}
							onRemoved={removeCard}
						/>
					))}
			</div>
		</div>
	);
};

export default Home;
