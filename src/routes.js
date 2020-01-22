import React from "react";
import { Route, IndexRoute } from "react-router";
import { routerActions } from "react-router-redux";
import { UserAuthWrapper } from "redux-auth-wrapper";
import App from "./components/App";
import HomePage from "./components/home_page";
import login_page from "./containers/login_page";
import logout_page from "./containers/logout_page";
import profile_page from "./containers/profile_page";
import AboutPage from "./components/about_page";
import NotFoundPage from "./components/not_found_page";

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.isAuthenticated,
  redirectAction: routerActions.replace,
  wrapperDisplayName: "UserIsAuthenticated"
});

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="login" component={login_page} />
    <Route path="logout" component={logout_page} />
    <Route path="profile" component={UserIsAuthenticated(profile_page)} />
    <Route path="about" component={AboutPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
