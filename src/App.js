import "./static/css/App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Menu from "./Components/Menu";
import Main from "./Components/Main";
import Error from "./Components/Error";
import MyAccount from "./Components/MyAccount";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" exact element={<Main />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/registration" element={<Registration />} />
				<Route path="/login" element={<Login />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/my-account" element={<MyAccount />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
