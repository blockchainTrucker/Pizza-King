import pizza from "../static/images/pizza.png";
import logo from "../static/images/pizza-king-logo.png";

export default function Logo(props) {
	return (
		<div className="logo-pizza">
			<img className="logo" src={logo} alt="Pizza King Logo" />
			<img className="pizza" alt="Spinning Pizza" src={pizza} />
		</div>
	);
}
