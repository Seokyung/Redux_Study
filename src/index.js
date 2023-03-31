import { legacy_createStore as createStore } from "redux";

const countModifier = (count = 0, action) => {
	console.log(count, action);
	if (action.type === "ADD") {
		return count + 1;
	} else if (action.type === "SUB") {
		return count - 1;
	} else {
		return count;
	}
};

const countStore = createStore(countModifier);

const plus = document.getElementById("add");
const minus = document.getElementById("sub");
const number = document.querySelector("span");

countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "SUB" });

console.log(countStore.getState());
