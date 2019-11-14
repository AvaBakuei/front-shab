import React from "react";
//local
import "./Button.scss";

const Button = ({ className, title, onClick }) => {
  return (
    <button
      className={`button ${className && className}`}
      onClick={() => onClick()}
    >
      {title}
    </button>
  );
};

export { Button };
