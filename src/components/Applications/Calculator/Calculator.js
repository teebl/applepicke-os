import React from "react";
import "./Calculator.css";

import Display from "./Display";
import CalcButton from "./CalcButton";

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: "0"
		};
	}

	render() {
		const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
		const numeralButtons = numbers.map(n => (
			<CalcButton key={n} handleClick={this.onNumeralPress}>
				{n}
			</CalcButton>
		));
		return (
			<div className="calculator">
				<Display display={this.state.display} />
				{numeralButtons}
			</div>
		);
	}
}

export default Calculator;
