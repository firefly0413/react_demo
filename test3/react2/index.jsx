import React from "react";
import ReactDom from "react-dom";

import App from "./app.js"
import {Provider} from "react-redux"
import rootReducer from "./reducers/index"
import {createStore} from "redux"
let store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
var oDiv = document.createElement("div");
oDiv.className = "container";
document.body.appendChild(oDiv);

ReactDom.render(
	<Provider store = {store}>
		<App />
	</Provider>,
	oDiv);