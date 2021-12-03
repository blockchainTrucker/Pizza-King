import { Link } from "react-router-dom";

function Login(props) {
	return (
		<div className="container">
			<form method="POST" action="/registration">
				<h3>Create an Account</h3>
				<input
					name="firstName"
					type="text"
					placeholder="First Name"
					// value="{{username}}"
				/>
				<input
					name="lastName"
					type="text"
					placeholder="Last Name"
					// value="{{username}}"
				/>
				<input
					name="email"
					type="text"
					placeholder="Email Address"
					// value="{{username}}"
				/>
				<input
					type="password"
					name="password"
					placeholder="  Password"
				/>
				<input
					type="repPassword"
					name="repPassword"
					placeholder="Repeat Password"
				/>
				<div className="container">
					<button>Submit</button>
				</div>
				<Link to="/login">Click here to login to existing account</Link>
			</form>
		</div>
	);
}

export default Login;
