import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./Views/LandingPage/landingPage.js"
import Login from "./Views/Login/login.js"
import Home from "./Views/Home/dashboard.js"
import Page404 from "./Views/Page404/page404.js"

function isAuth () {
    return false;
}

function checkAuth(nextState, replace) {
    if (!isAuth()) {
        replace({
            pathname: '/login'
        })
    }
}

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact render={() => <Login />} />
            </Switch>
        </BrowserRouter>
        
  );
}

export default Routes;