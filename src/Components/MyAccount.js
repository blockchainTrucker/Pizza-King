import { useEffect } from "react";
import Cart from "./Cart";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const jwt = require("jsonwebtoken");

export default function MyAccount(props) {
	const navigate = useNavigate();
	const [cookies, setCookies, removeCookies] = useCookies();
	let token = cookies.user;
	props = jwt.decode(token);

	useEffect(() => {
		document.title = "Pizza King - My Account";
	}, []);

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
