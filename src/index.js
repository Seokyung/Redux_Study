import { legacy_createStore as createStore } from "redux";

const countModifier = (state = 0) => {
	console.log(state);
	return state + 1;
};
const countStore = createStore(countModifier);

const plus = document.getElementById("add");
const minus = document.getElementById("sub");
const number = document.querySelector("span");

console.log(countStore.getState());
