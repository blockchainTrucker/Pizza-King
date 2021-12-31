import { useEffect } from "react";
import Logo from "./Logo";
import Info from "./Info";
import Alert from "./Alert";

export default function Main(props) {
	useEffect(() => {
		document.title = "Pizza King - Home";
	}, []);

	return (
		<div className="container">
			<Alert />
			<Logo />
			<Info />
		</div>
	);
}
