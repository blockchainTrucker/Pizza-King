import { useEffect } from "react";
import Cart from "./Cart";
import PastOrders from "./PastOrders";
import Alert from "./Alert";
import Logout from "./Logout";

export default function MyAccount(props) {
	useEffect(() => {
		document.title = "Pizza King - My Account";
	}, []);

	return (
		<div className="container">
			<div className="my-account">
				<Alert />
				<Cart />
				<PastOrders />
				<Logout />
			</div>
		</div>
	);
}
