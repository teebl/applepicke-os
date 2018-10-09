import parse from "./parse";

export default function evaluate(parentNode) {
	return walkTree(parentNode);
}

function walkTree(node) {
	switch (node.type) {
		case "Operator":
			if (node.leftChildNode && node.rightChildNode) {
				return operatorAction(
					node.token,
					walkTree(node.leftChildNode),
					walkTree(node.rightChildNode)
				);
			} else {
				return null;
			}
		case "Literal":
			return node.token;
	}
}

function operatorAction(operator, operand1, operand2) {
	const op1 = parseFloat(operand1);
	const op2 = parseFloat(operand2);
	switch (operator) {
		case "+":
			return op1 + op2;
		case "-":
			return op1 - op2;
		case "*":
			return op1 * op2;
		case "/":
			return op1 / op2;
		case "^":
			return op1 ** op2;
	}
}
/*


walkTree(node){
read node
 if node value is literal or letter
 	return node value
 if node value is operator
 	return childA (operator function) childB
 	//left and right assoc will affect this?
}
*/
