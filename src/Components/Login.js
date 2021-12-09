import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";

function Login(props) {
	useEffect(() => {
		document.title = "Pizza King - Login";
	}, []);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cookies, setCookies] = useCookies();
	const navigate = useNavigate();

	function loginUser(email, password) {
		const url = "http://localhost:9999/api/users/login";
		let data = JSON.stringify({
			email: email,
			password: password,
		});
		let resources = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: data,
		};
		return fetch(url, resources).then((res) => res.json());
	}
	function submitHandler(event) {
		event.preventDefault();
		loginUser(email, password).then((res) => {
			setCookies("x-auth-token", res);
		});
	}

	return (
		<div className="container">
			<form className="login" onSubmit={submitHandler}>
				<h3>Sign in</h3>
				<input
					name="email"
					type="text"
					placeholder="Email Address"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<input
					type="password"
					name="password"
					placeholder="  Password"
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<div className="container">
					<button type="submit">Submit</button>
				</div>
				<Link to="/registration">Click here to create an account</Link>
			</form>
		</div>
	);
}

export default Login;
