import React from "react";
import "./Calculator.css";
import logic from "./logic/logic.js";
import Display from "./Display";
import CalcButton from "./CalcButton";

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: "0",
			ans: ""
		};
	}

	handleDisplayChange = event => {
		const newDisplay = event.target.value.replace(/^0+/, "");
		this.setState({ display: newDisplay });
	};

	onButtonPress = symbol => {
		console.log(symbol);
		console.log(/\+|\-|\/|\*/.test(symbol));
		var newSubString;
		if (/\+|\-|\/|\*/.test(symbol)) {
			newSubString = ` ${symbol} `;
		} else {
			newSubString = symbol;
		}

		const newDisplay = this.state.display
			.concat(newSubString)
			.replace(/^0+/, "");

		this.setState({ display: newDisplay });
	};

	onSubmit = event => {
		this.setState({ display: "0", ans: logic(this.state.display) });
	};

	render() {
		const numerals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
		const operators = ["+", "-", "*", "/", "^"];
		const numeralButtons = numerals.map(n => (
			<CalcButton
				customClass="numeralButton"
				symbol={n}
				key={n}
				handleClick={this.onButtonPress}
			/>
		));
		const operatorButtons = operators.map(o => (
			<CalcButton
				customClass="operatorButton"
				symbol={o}
				key={o}
				handleClick={this.onButtonPress}
			/>
		));
		return (
			<div className="calculator">
				<Display
					display={this.state.display}
					ans={this.state.ans}
					handleChange={this.handleDisplayChange}
					handleSubmit={this.onSubmit}
				/>
				{operatorButtons}
				{numeralButtons}
				<CalcButton
					customClass="equalsButton"
					symbol={"="}
					handleClick={this.onSubmit}
				/>
			</div>
		);
	}
}

export default Calculator;
