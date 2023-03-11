import React, { FC } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { AuthData } from "../../../interfaces/auth.interfaces";
import { isAuth } from "../../../service/app/auth";

interface PrivateRouteProps extends RouteProps {
    component: React.ComponentType<any>
}

const AdminRoute: FC<PrivateRouteProps> = ({
    component: Component,
    ...rest
}) => {
    return <Route {...rest} render={props => {
        const auth = isAuth()
        if (auth) {
            const { user: { role } } = auth as AuthData
            return role && <Component {...props} />
        }
        return <Redirect to="/signin" />
    }} />
}

export default AdminRoute