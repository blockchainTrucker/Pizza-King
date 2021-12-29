import pizza from "../static/images/pizza.png";
import logo from "../static/images/pizza-king-logo.png";
import { useEffect } from "react";

export default function OrderPlaced(props) {
	useEffect(() => {
		document.title = "Pizza King - Order Placed";
	}, []);

	return (
		<div className="container">
			<div className="order-placed">
				<div className="logo-pizza">
					<img className="logo" src={logo} alt="Pizza King Logo" />
					<img className="pizza" alt="Spinning Pizza" src={pizza} />
				</div>
				<h3>We've got your order... see you in 15-20 minutes!</h3>
			</div>
		</div>
	);
}
