import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Nav from "./Components/Nav";
import { BrowserRouter } from "react-router-dom";

import Main from "./Components/Main";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Nav />
			<App />
			<Main />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
