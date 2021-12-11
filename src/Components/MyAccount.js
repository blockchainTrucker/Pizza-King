import { useEffect } from "react";
import Cart from "./Cart";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const jwt = require("jsonwebtoken");

export default function MyAccount(props) {
	const navigate = useNavigate();
	const [cookies, , removeCookies] = useCookies();
	let pastOrders;
	let token = cookies.user;
	props = jwt.decode(token);

	useEffect(() => {
		document.title = "Pizza King - My Account";
	}, []);

	function pastOrdersGetter() {
		const url = "http://localhost:9999/api/past-orders";
		let data = JSON.stringify({
			userID: props.id,
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
	function pastOrdersHandler(event) {
		pastOrdersGetter().then((res) => {
			pastOrders = res;
		});
	}

	pastOrdersHandler();

	return (
		<div className="container">
			<div className="my-account">
				<Cart />
				<h3>Past Orders</h3>
				<div className="logout">
					<button
						onClick={function () {
							removeCookies("user");
							removeCookies("cart");
							removeCookies("cartCount");
							navigate("/");
						}}
					>
						Logout
					</button>
				</div>
			</div>
		</div>
	);
}
