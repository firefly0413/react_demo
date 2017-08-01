import React from "react";
import ReactDom from "react-dom";

import App from "./app.js"
import {Provider} from "react-redux"
import rootReducer from "./reducers/index"
import {createStore} from "redux"
let store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let oDiv = document.createElement("div");
document.body.appendChild(oDiv);

ReactDom.render(
	<Provider store = {store}>
		<App />
	</Provider>,
	oDiv);