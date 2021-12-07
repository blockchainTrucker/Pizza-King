import { Link } from "react-router-dom";
import { useEffect } from "react";

function Login(props) {
	useEffect(() => {
		document.title = "Pizza King - Login";
	}, []);
	return (
		<div className="container">
			<form className="login" method="POST" action="/login">
				<h3>Sign in</h3>
				<input
					name="email"
					type="text"
					placeholder="Email Address"
					value={props.email}
				/>
				<input
					type="password"
					name="password"
					placeholder="  Password"
				/>
				<div className="container">
					<button>Submit</button>
				</div>
				<Link to="/registration">Click here to create an account</Link>
			</form>
		</div>
	);
}

export default Login;
