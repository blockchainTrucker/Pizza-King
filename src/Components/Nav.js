import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
	render() {
		return (
			<nav>
				<div class="navOptions">
					<Link to="/">Home</Link>
				</div>
			</nav>
		);
	}
}

export default Nav;
