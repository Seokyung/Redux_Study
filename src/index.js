import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./react_redux/App";
import store from "./react_redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
