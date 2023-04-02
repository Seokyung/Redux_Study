import React from "react";

function Todo({ text }) {
	return (
		<li>
			{text}
			<button>delete</button>
		</li>
	);
}

export default Todo;
