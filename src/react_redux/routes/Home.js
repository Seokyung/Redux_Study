import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "../components/Todo";
import { actionCreators, addTodo } from "../store";

function Home() {
	const [text, setText] = useState("");
	const todoList = useSelector((state) => state);
	const dispatch = useDispatch();

	const onTextChange = (e) => {
		const {
			target: { value },
		} = e;
		setText(value);
	};

	const onAddTodo = (e) => {
		e.preventDefault();
		dispatch(addTodo(text));
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
			<ul>
				{todoList.map((todo) => (
					<Todo key={todo.id} {...todo} />
				))}
			</ul>
		</div>
	);
}

// getState() -> useSelector()
const mapStateToProps = (state) => {
	return {
		todoList: state,
	};
};

// dispatch() -> useDispatch()
const mapDispatchToProps = (dispatch) => {
	return { addTodo: (text) => dispatch(actionCreators.addTodo(text)) };
};

export default Home;
