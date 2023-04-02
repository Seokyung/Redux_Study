import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store";

function Todo({ id, text }) {
	const dispatch = useDispatch();

	const onBtnClick = () => {
		dispatch(deleteTodo(id));
	};

	return (
		<li>
			{text}
			<button onClick={onBtnClick}>delete</button>
		</li>
	);
}

export default Todo;
