import "./App.css";
import React from "react";
import { ApplepickeOS } from "../ApplepickeOS";
import Calculator from "../../components/Applications/Calculator/Calculator.js";
class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Calculator />
				<ApplepickeOS />
			</div>
		);
	}
}

export default App;
