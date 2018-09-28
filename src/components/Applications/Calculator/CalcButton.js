import React from "react";

const CalcButton = props => {
	return (
		<button
			className="button"
			onClick={() => {
				props.handleClick(props.children);
			}}
		>
			{props.children}
		</button>
	);
};

export default CalcButton;
