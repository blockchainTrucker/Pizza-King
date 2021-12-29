import pizza from "../static/images/pizza.png";
import logo from "../static/images/pizza-king-logo.png";
import { useEffect } from "react";

export default function Main(props) {
	useEffect(() => {
		document.title = "Pizza King - Home";
	}, []);

	return (
		<div className="container">
			<div className="logo-pizza">
				<img className="logo" src={logo} alt="Pizza King Logo" />
				<img className="pizza" alt="Spinning Pizza" src={pizza} />
			</div>
			<h2 className="phoneNumber">804-245-9000</h2>
			<div className="map-hours">
				<div className="hours">
					<h3>Hours</h3>
					<p>Sunday - Thursday: 11am-10pm</p>
					<p>Friday and Saturday: 11am-12am</p>
				</div>
				<div className="location">
					<h3>Location</h3>
					<div className="address">
						<p>3883 Old Buckingham Rd</p>
						<p>Powhatan, Virginia 23139</p>
					</div>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.5657988631315!2d-77.92141158563865!3d37.54173143330785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b162a482302e43%3A0x28323249736b601c!2sPowhatan%20Courthouse%20Historic%20District!5e0!3m2!1sen!2sus!4v1638493891742!5m2!1sen!2sus"
						width="275"
						height="275"
						title="Map to Pizza King"
					></iframe>
				</div>
			</div>
		</div>
	);
}
