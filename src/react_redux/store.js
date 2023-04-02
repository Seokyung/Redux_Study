import { legacy_createStore as createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

// createAction() covers this codes
// const ADD = "ADD";
// const DELETE = "DELETE";

// export const addTodo = (text) => {
// 	return { type: ADD, text, id: Date.now() };
// };

// export const deleteTodo = (id) => {
// 	return { type: DELETE, id: parseInt(id) };
// };

const reducer = (state = [], action) => {
	switch (action.type) {
		case addTodo.type:
			return [{ text: action.payload, id: Date.now() }, ...state];
		case deleteTodo.type:
			return state.filter((todo) => todo.id !== action.payload);
		default:
			return state;
	}
};

const store = createStore(reducer);

export const actionCreators = {
	addTodo,
	deleteTodo,
};

export default store;
