import React from "react";
import ReactDOM from "react-dom";
import "./static/css/index.css";
import App from "./App";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Nav />
			<App />
			<Footer />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
