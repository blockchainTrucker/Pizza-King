import { useEffect } from "react";
import Cart from "./Cart";

export default function MyCart(props) {
	useEffect(() => {
		document.title = "Pizza King - My Cart";
	}, []);

	return (
		<div className="container">
			<div className="shopping-cart-solo">
				<Cart />
			</div>
		</div>
	);
}
