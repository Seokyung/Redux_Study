import { legacy_createStore as createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [{ text: action.text, id: action.id }, ...state];
		case DELETE_TODO:
			return [];
		default:
			return state;
	}
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const addTodo = (text) => {
	store.dispatch({ type: ADD_TODO, text, id: Date.now() });
};

const addToList = () => {
	const todoList = store.getState();
	ul.innerHTML = "";
	todoList.forEach((todo) => {
		const li = document.createElement("li");
		li.id = todo.id;
		li.innerText = todo.text;
		ul.appendChild(li);
	});
};

store.subscribe(addToList);

const onSubmit = (e) => {
	e.preventDefault();
	const todo = input.value;
	input.value = "";
	addTodo(todo);
};

form.addEventListener("submit", onSubmit);
