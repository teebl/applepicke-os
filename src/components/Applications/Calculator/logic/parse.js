import tokenizer from "./tokenizer.js";
import * as CONST from "./constants.js";
import "./helpers.js";

function parse(tkArray) {
	var output = [];
	var opStack = [];
	for (let t of tkArray) {
		switch (t.type) {
			case "Literal":
				output.push(t);
				break;
			case "Letter":
				output.push(t);
				break;
			case "Operator":
				while (
					opStack.peek() &&
					opStack.peek().type === "Operator" &&
					//current token is left-associative and its precedence is less than or equal to that of top of Opstack, or
					((t.associativity() === "left" &&
						t.precedence() <= opStack.peek().precedence()) ||
						//current token is right associative, and has precedence less than that of top of opStack,
						(t.associativity() === "right" &&
							t.precedence() < opStack.peek().precedence()))
				) {
					output.push(opStack.pop());
				}
				opStack.push(t);
				break;
			case "LeftParenthesis":
				opStack.push(t);
				break;
			case "RightParenthesis":
				while (opStack.peek() && opStack.peek().type !== "LeftParenthesis") {
					output.push(opStack.pop());
				}
				opStack.pop();
				break;
			default:
				alert(`Error, unrecognized token: ${t.value}`);
				break;
		}
	}
	return output.concat(opStack.reverse());
}

export default parse;
