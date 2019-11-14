import React from "react";
//local
import "./Card.scss";

const Card = props => {
	const { item } = props;
	function handleClicked() {
		if (props.onRemoved) props.onRemoved(item);
	}
	return (
		<article className="card">
			<img className="card__img" src={item.image} alt="images" />
			<a className="card__title" href="#" onClick={handleClicked}>
				{item.title}
			</a>
			<h2 className="card__comment">{item.comment}</h2>
		</article>
	);
};

export { Card };
