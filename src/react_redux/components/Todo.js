import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

function Todo({ id, text }) {
	const dispatch = useDispatch();

	const onBtnClick = () => {
		dispatch(remove(id));
	};

	return (
		<li>
			<Link to={`/${id}`}>{text}</Link>
			<button onClick={onBtnClick}>delete</button>
		</li>
	);
}

export default Todo;
