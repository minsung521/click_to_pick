import React from "react";
import "./LeftCounter.css";

const LeftCounter = (props) => {
	const end = 33;

	return <div className="leftCounter">{end - props.count} left</div>;
};

export default LeftCounter;
