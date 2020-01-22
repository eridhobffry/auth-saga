/* eslint-disable import/default */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import routes from "./routes";
import configureStore from "./store/configure_store";

import "./styles/styles.scss"; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import { syncHistoryWithStore } from "react-router-redux";
require("../public/favicon.ico"); // Tell webpack to load favicon.ico

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(createBrowserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById("app")
);
