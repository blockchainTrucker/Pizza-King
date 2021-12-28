import { Navigate } from "react-router-dom";

export default function PrivateRoute({ redirectTo, isAuth, path, ...props }) {
	if (!isAuth) {
		return <Navigate to={redirectTo} />;
	}
	return props.children;
}
