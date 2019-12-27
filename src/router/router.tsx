import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LoginPage from 'components/pages/login';
import LandingPage from 'components/pages/landing';
import NotFound from 'components/pages/not-found';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
}