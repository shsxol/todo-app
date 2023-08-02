import React from "react";
import "./Title.css"; // Import the CSS file for styling

function Title(props) {
  return <h1 className="title">{props.name}</h1>;
}

export default Title;
