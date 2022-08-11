import React from "react";
import { rStart, rEnd, allPickCount } from "./atom";
import { useRecoilState } from "recoil";

const RangeSetter = () => {
	const [start, setStart] = useRecoilState(rStart);
	const [pickCount, setPickCount] = useRecoilState(allPickCount);

	return (
		!pickCount && (
			<div className="setter">
				<div style={{ fontSize: "16px", color: "#0A95FF" }}>set range</div>
			</div>
		)
	);
};

export default RangeSetter;
