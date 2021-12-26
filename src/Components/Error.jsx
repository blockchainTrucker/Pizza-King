import pizzaBox from "../static/images/pizza-box.png";
import { useEffect } from "react";

export default function Error(props) {
	useEffect(() => {
		document.title = "Pizza King - Error";
	}, []);
	return (
		<div className="container">
			<div className="error">
				<h3>404: Page not found...</h3>
				<img alt="404: Page not found" src={pizzaBox}></img>
			</div>
		</div>
	);
}
