import { useEffect } from "react";
import Cart from "./Cart";
export default function MyAccount(props) {
	useEffect(() => {
		document.title = "Pizza King - My Account";
	}, []);
	return (
		<div className="container">
			<div className="my-account">
				<Cart />
				<h3>Past Orders</h3>
				<div className="logout">
					<button>Logout</button>
				</div>
			</div>
		</div>
	);
}
