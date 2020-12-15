import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
// import { MarvelScreen } from "../components/marvel/MarvelScreen";
// import { Navbar } from "../components/ui/Navbar";

export const AppRouter = () => {

    const {user} = useContext(AuthContext);
    // console.log(user);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                    exact 
                    path="/login" 
                    component={LoginScreen} 
                    isNotAuth={user.logged}/>

                    <PrivateRoute
                        path="/"
                        component={DashboardRoutes} 
                        isAuth={user.logged}
                        />
                </Switch>
            </div>
        </Router>
    );
}
