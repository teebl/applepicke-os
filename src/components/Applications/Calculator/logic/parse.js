//Parse converts the tokens from infix notation to an Abstract Syntax Tree
import tokenizer from "./tokenizer.js";
import "./helpers.js";

function parse(tkArray) {
	var output = [];
	var opStack = [];
	for (let t of tkArray) {
		switch (t.type) {
			case "Literal" || "Letter":
				output.push(new ASTNode(t, null, null));
				break;
			case "Operator":
				while (
					opStack.peek() &&
					opStack.peek().type === "Operator" &&
					//current token is left-associative and its precedence is less than or equal to that of top of opstack, or
					((t.associativity() === "left" &&
						t.precedence() <= opStack.peek().precedence()) ||
						//current token is right associative, and has precedence less than that of top of opStack,
						(t.associativity() === "right" &&
							t.precedence() < opStack.peek().precedence()))
				) {
					output.addNode(opStack.pop());
				}
				opStack.push(t);
				break;
			case "LeftParenthesis":
				opStack.push(t);
				break;
			case "RightParenthesis":
				while (opStack.peek() && opStack.peek().type !== "LeftParenthesis") {
					output.addNode(opStack.pop());
				}
				opStack.pop();
				break;
			default:
				alert(`Error, unrecognized token: ${t.value}`);
				break;
		}
	}

	while (opStack.peek()) {
		output.addNode(opStack.pop());
	}
	return output.pop();
}

function ASTNode(token, leftChildNode, rightChildNode) {
	this.token = token.value;
	this.type = token.type;
	this.leftChildNode = leftChildNode;
	this.rightChildNode = rightChildNode;
}

Array.prototype.addNode = function(operatorToken) {
	var rightChildNode = this.pop();
	var leftChildNode = this.pop();
	this.push(new ASTNode(operatorToken, leftChildNode, rightChildNode));
};

export default parse;
