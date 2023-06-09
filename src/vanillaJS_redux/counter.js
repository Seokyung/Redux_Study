import { legacy_createStore as createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("sub");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const SUB = "SUB";

const countModifier = (count = 0, action) => {
	switch (action.type) {
		case ADD:
			return count + 1;
		case SUB:
			return count - 1;
		default:
			return count;
	}
};

const countStore = createStore(countModifier);

const onNumberChange = () => {
	number.innerText = countStore.getState();
};

countStore.subscribe(onNumberChange);

const handlePlus = () => {
	countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
	countStore.dispatch({ type: SUB });
};

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
