import { legacy_createStore as createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

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

const reducer = createReducer([], (builder) => {
	builder
		.addCase(addTodo, (state, action) => {
			state.push({ text: action.payload, id: Date.now() });
		})
		.addCase(deleteTodo, (state, action) => {
			return state.filter((todo) => todo.id !== action.payload);
		});
});

// object notation for createReducer() is deprecated, use builder callback notation
// const reducer = createReducer([], {
// 	[addTodo]: (state, action) => {
// 		state.push({ text: action.payload, id: Date.now() });
// 	},
// 	[deleteTodo]: (state, action) =>
// 		state.filter((todo) => todo.id !== action.payload),
// });

// createReducer() covers this code
// const reducer = (state = [], action) => {
// 	switch (action.type) {
// 		case addTodo.type:
// 			return [{ text: action.payload, id: Date.now() }, ...state];
// 		case deleteTodo.type:
// 			return state.filter((todo) => todo.id !== action.payload);
// 		default:
// 			return state;
// 	}
// };

const store = createStore(reducer);

export const actionCreators = {
	addTodo,
	deleteTodo,
};

export default store;
