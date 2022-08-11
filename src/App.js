import "./App.css";
import LeftCounter from "./LeftCounter";
import { useRecoilState } from "recoil";
import { allPickCount, numArr } from "./atom";
import Picker from "./Picker";
import RangeSetter from "./RangeSetter";

const App = () => {
	const [pickCount, setPickCount] = useRecoilState(allPickCount);
	const [arr, setArr] = useRecoilState(numArr);

	const refreshHandler = () => {
		setPickCount(0);
		setArr([]);
	};

	return (
		<div className="App">
			<div className="header">
				<LeftCounter count={pickCount} />
				<div onClick={refreshHandler} className="RefreshContainer">
					<span class="material-symbols-outlined">refresh</span>
				</div>
			</div>
			<div className="main">
				<Picker />
				<RangeSetter />
			</div>
		</div>
	);
};

export default App;
