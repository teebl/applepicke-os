import React from "react";
import "./Calculator.css";

import Display from "./Display";
import Buttons from "./Buttons";

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: "0"
		};
		this.onKeyPress = this.onKeyPress.bind(this);
		this.onEvaluatePressed = this.onEvaluatePressed.bind(this);
	}

	onKeyPress(key) {
		const tempKey = this.state.display.concat(key);
		console.log(`You pressed ${key}`);
		console.log(`now it's ${tempKey}`);
		this.setState(state => ({
			display: tempKey
		}));
	}

	onDeletePressed() {
		console.log("You pressed Delete!");
	}

	onClearPressed() {
		console.log("You Pressed Clear!");
	}

	onEvaluatePressed() {
		console.log("you pressed Equals!");
	}

	render() {
		const keys = [
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"0",
			"+",
			"-",
			"*",
			"/"
		];
		const buttons = keys.map(b => (
			<button onClick={() => this.onKeyPress(b)}>{b}</button>
		));
		return (
			<div className="calculator">
				<Display display={this.state.display} />
				{buttons}
				<button onClick={() => this.onEvaluatePressed()}>=</button>
			</div>
		);
	}
}

export default Calculator;
