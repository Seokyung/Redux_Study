import React, { useState } from "react";

function Home() {
	const [text, setText] = useState("");

	const onTextChange = (e) => {
		const {
			target: { value },
		} = e;
		setText(value);
	};

	const onAddTodo = (e) => {
		e.preventDefault();
		console.log(text);
		setText("");
	};

	return (
		<div>
			<h2>Home</h2>
			<form onSubmit={onAddTodo}>
				<input
					type="text"
					value={text}
					onChange={onTextChange}
					placeholder="Write something to do!"
				/>
				<button>Add</button>
			</form>
			<ul></ul>
		</div>
	);
}

export default Home;
