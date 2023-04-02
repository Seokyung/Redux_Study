import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { remove } from "../store";

function Detail() {
	const navigate = useNavigate();
	const detailId = useParams().id;
	const todo = useSelector((state) => state);
	const dispatch = useDispatch();
	const detailTodo = todo.find((item) => item.id === parseInt(detailId));

	const onDelete = () => {
		dispatch(remove(parseInt(detailId)));
		navigate("/", { replace: true });
	};

	return (
		<div>
			<h2>{detailTodo?.text}</h2>
			<h4>Created at: {detailTodo?.id}</h4>
			<button onClick={onDelete}>delete</button>
		</div>
	);
}

export default Detail;
