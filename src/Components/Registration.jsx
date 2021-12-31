import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Registration(props) {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const [repPassword, setRepPassword] = useState("");
	const [error, setError] = useState();

	useEffect(() => {
		document.title = "Pizza King - Registration";
	}, []);

	function registerUser(firstName, lastName, email, password) {
		const url = "http://localhost:9999/api/users/register";
		let data = JSON.stringify({
			firstName: firstName,
			lastName: lastName,
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
		let passRegex = new RegExp(/[\S+]{6,24}/);
		let nameRegex = new RegExp(/[a-zA-Z]{2,24}/);
		let emailRegex = new RegExp(/[a-z0-9]+[a-z0-9]*@[a-z0-9]*.\w\w\w/i);

		if (!nameRegex.test(firstName)) {
			setError("Enter First Name");
			return;
		} else if (!nameRegex.test(lastName)) {
			setError("Enter Last Name");
			return;
		} else if (!emailRegex.test(email)) {
			setError("Please Enter Valid Email");
			return;
		} else if (!passRegex.test(password)) {
			setError("Password Must Be at Least 6 Characters");
			return;
		} else if (password !== repPassword) {
			setError("Passwords Do Not Match");
			return;
		}

		registerUser(firstName, lastName, email, password).then((res) => {
			if (res === "Email is already in use") {
				setError("Email Already Exists, Please Login");
				return;
			} else if (res === "success") {
				navigate("/login");
				document.getElementById("alert").style.display = "block";
				document.getElementById(
					"alertMessage"
				).innerText = `You have successfully registered, please sign in.`;
			}
		});
	}

	return (
		<div className="container">
			<form className="regForm" onSubmit={submitHandler}>
				<h3>Create an Account</h3>
				<p className="error-message">{error}</p>
				<input
					name="firstName"
					type="text"
					placeholder="First Name"
					onChange={(e) => {
						setFirstName(e.target.value);
					}}
					value={firstName}
				/>
				<input
					name="lastName"
					type="text"
					placeholder="Last Name"
					onChange={(e) => {
						setLastName(e.target.value);
					}}
					value={lastName}
				/>
				<input
					name="email"
					type="text"
					placeholder="Email Address"
					onChange={(e) => {
						setEmail(e.target.value.toLowerCase().trim());
					}}
					value={email}
				/>
				<input
					type="password"
					name="password"
					placeholder="  Password"
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					value={password}
				/>
				<input
					type="password"
					name="repPassword"
					placeholder="Repeat Password"
					onChange={(e) => {
						setRepPassword(e.target.value);
					}}
					value={repPassword}
				/>
				<div className="container">
					<button type="submit">Submit</button>
				</div>
				<Link to="/login">Click here to login to existing account</Link>
			</form>
		</div>
	);
}
