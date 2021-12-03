import "./static/css/App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Menu from "./Components/Menu";
import Main from "./Components/Main";
function App() {
	return (
		<div className="container">
			<Routes>
				<Route path="/" exact element={<Main />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/registration" element={<Registration />} />
				<Route path="/login" element={<Login />} />
				<Route path="/menu" element={<Menu />} />
			</Routes>
		</div>
	);
}

export default App;
