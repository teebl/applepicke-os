import "./App.css";

import React from "react";
import { ApplepickeOS } from "../ApplepickeOS";
import parse from "../../components/Applications/Calculator/logic/parse.js";
import tokenizer from "../../components/Applications/Calculator/logic/tokenizer.js";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ""
		};
		//TODO: remove after calculator implemented
		this.keyPressHandler = this.keyPressHandler.bind(this);
	}
	//TODO: remove after calculator implemented
	keyPressHandler(e) {
		const tempInput = e.target.value;
		this.setState({ input: tempInput });
	}

	render() {
		//TODO remove after calculator implemented
		const stringTokens = tokenizer(this.state.input).map(
			o => `{${o.value.toString()}, ${o.type}}`
		);

		//TODO remove after calculator implemented
		const parsedInput = parse(tokenizer(this.state.input));
		return (
			<div className="app">
				{/* TODO: remove after calculator implemented*/}
				<input
					type="text"
					value={this.state.value}
					onChange={this.keyPressHandler}
				/>
				<p>input: {this.state.input}</p>
				<p>tokened input: {stringTokens}</p>
				<ApplepickeOS />
			</div>
		);
	}
}

export default App;
