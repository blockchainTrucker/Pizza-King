import { useEffect } from "react";
import Logo from "./Logo";
import Info from "./Info";

export default function Main(props) {
	useEffect(() => {
		document.title = "Pizza King - Home";
	}, []);

	return (
		<div className="container">
			<Logo />
			<Info />
		</div>
	);
}
