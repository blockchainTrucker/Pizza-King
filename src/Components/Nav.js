import { Link } from "react-router-dom";
import cart from "../static/images/cart.png";

function Nav(props) {
	return (
		<nav>
			<div className="navOptions">
				<Link to="/">Home</Link>
				<Link to="/menu">Menu</Link>
				<Link to="/my-history">My History</Link>
				<Link to="/my-cart">
					<img className="cart" src={cart} alt="Shopping Cart"></img>
				</Link>
			</div>
		</nav>
	);
}

export default Nav;
