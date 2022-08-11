import React, { Fragment, useState } from "react";
import { allPickCount, numArr } from "./atom";
import { useRecoilState } from "recoil";
import Title from "./Title";
import "./Picker.css";

const Picker = () => {
	const [arr, setArr] = useRecoilState(numArr);
	const [pickCount, setPickCount] = useRecoilState(allPickCount);
	const [number, setNumber] = useState(null);

	const pick = () => {
		let num;
		do {
			num = Math.floor(Math.random() * 33);
		} while (arr[num] == true);
		setNumber(num);
	};

	const clickHandler = () => {
		if (pickCount == 34) setPickCount(0);
		else setPickCount((prev) => prev + 1);
		pick();
	};

	return (
		<div className="pickerWrapper" onClick={clickHandler}>
			{pickCount ? (
				pickCount == 34 ? (
					<Title text="Finished" />
				) : (
					<div style={{ fontSize: "80px" }}>{number}</div>
				)
			) : (
				<Title text="Click to Pick" />
			)}
		</div>
	);
};

export default Picker;
