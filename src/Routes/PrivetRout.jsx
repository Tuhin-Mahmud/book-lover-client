/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

const PrivetRout = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        <p className="text-center"><progress className="progress w-56"></progress></p>
    }

    if (user) {
        children
    }

    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;
};

export default PrivetRout;