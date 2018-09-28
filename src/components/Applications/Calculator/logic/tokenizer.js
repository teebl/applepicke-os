//Tokenizer parses the mathematical string from the calculator and returns an array of tokens
//Tokens will have a type and value

function Token(type, value) {
	this.type = type;
	this.value = value;
}

function Tokenizer(string) {
	var result = [];
	var numeralBuffer = "";

	string = string.replace(/\s+/g, "").split("");

	string.forEach((char, idx) => {
		switch (charType(char)) {
			case "Literal":
				numeralBuffer += char;
				break;
			case "Letter":
				resolveNumberBuffer();
				result.push(new Token("Letter", char));
				break;
			case "Operator":
				resolveNumberBuffer();
				result.push(new Token("Operator", char));
				break;
			case "LeftParenthesis":
				resolveNumberBuffer();
				result.push(new Token("LeftParenthesis", char));
				break;
			case "RightParenthesis":
				resolveNumberBuffer();
				result.push(new Token("RightParenthesis", char));
				break;
			default:
				alert(`Unrecognized input: "${char}"`);
				break;
		}
	});

	resolveNumberBuffer();
	return result;

	function resolveNumberBuffer() {
		if (numeralBuffer.length) {
			result.push(new Token("Literal", numeralBuffer));
			numeralBuffer = "";
		}
	}

	function charType(char) {
		if (/[0-9]/.test(char)) {
			return "Literal";
		} else if (char === ".") {
			return "Literal";
		} else if (/[a-z]/.test(char)) {
			return "Letter";
		} else if (/\+|\-|\/|\*|\^/.test(char)) {
			return "Operator";
		} else if (char === "(") {
			return "LeftParenthesis";
		} else if (char === ")") {
			return "RightParenthesis";
		}
	}
}

export default Tokenizer;
