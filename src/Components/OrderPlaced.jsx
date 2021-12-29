import Logo from "./Logo";
import { useEffect } from "react";

export default function OrderPlaced(props) {
	useEffect(() => {
		document.title = "Pizza King - Order Placed";
	}, []);

	return (
		<div className="container">
			<div className="order-placed">
				<Logo />
				<h3>We've got your order... see you in 15-20 minutes!</h3>
			</div>
		</div>
	);
}
