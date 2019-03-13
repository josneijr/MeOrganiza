import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./Views/LandingPage/landingPage.js"
import Login from "./Views/Login/login.js"
import Home from "./Views/Home/dashboard.js"
import Page404 from "./Views/Page404/page404.js"

function isAuth () {
    return false;
}

function checkAuth(nextState, replace) {
    console.log("oi")
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
                <Route path="/" exact render={() => <LandingPage />} />
                <Route path="/login" exact render={() => <Login />} />
                <Route path="/home" exact onEnter={checkAuth} render={() => (
                    !isAuth() ? (
                        <Redirect to="/login"/>
                    ) : (
                        <Home />
                    )
                    )} />
                <Route render={() => <Page404/>} />
            </Switch>
        </BrowserRouter>
        
  );
}

export default Routes;