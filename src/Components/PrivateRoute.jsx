import { Navigate } from "react-router-dom";

const PrivateRoute = ({ redirectTo, isAuth, path, ...props }) => {
	if (!isAuth) {
		return <Navigate to={redirectTo} />;
	}
	return props.children;
};

export default PrivateRoute;
