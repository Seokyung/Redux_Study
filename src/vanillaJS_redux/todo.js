import { legacy_createStore as createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (text) => {
	return {
		type: ADD_TODO,
		text,
		id: Date.now(),
	};
};

const deleteTodo = (id) => {
	return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			const newTodoObj = { text: action.text, id: action.id };
			return [newTodoObj, ...state];
		case DELETE_TODO:
			const newTodoArray = state.filter((todo) => todo.id !== action.id);
			return newTodoArray;
		default:
			return state;
	}
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddTodo = (text) => {
	store.dispatch(addTodo(text));
};

const dispatchDeleteTodo = (e) => {
	const id = parseInt(e.target.parentNode.id);
	store.dispatch(deleteTodo(id));
};

const addToList = () => {
	const todoList = store.getState();
	ul.innerHTML = "";
	todoList.forEach((todo) => {
		const li = document.createElement("li");
		const btn = document.createElement("button");
		btn.innerText = "Delete";
		btn.addEventListener("click", dispatchDeleteTodo);
		li.id = todo.id;
		li.innerText = todo.text;
		li.appendChild(btn);
		ul.appendChild(li);
	});
};

store.subscribe(addToList);

const onSubmit = (e) => {
	e.preventDefault();
	const todo = input.value;
	input.value = "";
	dispatchAddTodo(todo);
};

form.addEventListener("submit", onSubmit);
