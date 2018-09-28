import "./App.css";

import React from "react";
import { ApplepickeOS } from "../ApplepickeOS";
import tokenizer from "../../components/Applications/Calculator/logic/tokenizer.js";
class App extends React.Component {
	render() {
		console.log(tokenizer("4455.443 - 65 * 34e"));
		return (
			<div className="app">
				<ApplepickeOS />
			</div>
		);
	}
}

export default App;
