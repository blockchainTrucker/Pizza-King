import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import PastOrders from "./PastOrders";

export default function MyAccount(props) {
	const navigate = useNavigate();
	const [, , removeCookies] = useCookies();

	useEffect(() => {
		document.title = "Pizza King - My Account";
	}, []);

	return (
		<div className="container">
			<div className="my-account">
				<Cart />
				<PastOrders />
				<div className="logout">
					<button
						onClick={() => {
							removeCookies("user");
							removeCookies("pastOrders");
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
