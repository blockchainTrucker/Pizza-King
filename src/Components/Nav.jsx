import { Link } from "react-router-dom";
import cart from "../static/images/cart.png";
import { useCookies } from "react-cookie";

function Nav(props) {
	const [cookies] = useCookies();

	return (
		<nav>
			<div className="navOptions">
				<Link to="/">Home</Link>
				<Link to="/menu">Menu</Link>
				<Link to="/my-account">My Account</Link>
				<Link to="/my-cart" className="cartCount">
					<img className="cart" src={cart} alt="Shopping Cart"></img>
					{cookies.cartCount || "0"}
				</Link>
			</div>
		</nav>
	);
}

export default Nav;
