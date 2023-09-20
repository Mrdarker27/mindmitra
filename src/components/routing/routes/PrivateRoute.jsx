import React, { useContext } from "react";
import { Context } from "../../contexts/Store";
import { useLocation, Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const { state } = useContext(Context);
    const is_verified = state.user_data.is_verified;
    const location = useLocation();

    return is_verified ? (
        children
    ) : (
        <Navigate
            to={
                location.pathname
                    ? `auth/login-page?next=${location.pathname}`
                    : `auth/login-page`
            }
        />
    );
}

export default PrivateRoute;
