import { createStore, compose, applyMiddleware } from "redux";
import createLogger from "redux-logger";
import { routerMiddleware } from "react-router-redux";
import { loadState, saveState } from "../connectivity/local_storage";
import { browserHistory } from "react-router";
import { createBrowserHistory } from "history";
import createSagaMiddleware, { END } from "redux-saga";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducers from "../reducers";
import rootSagas from "../sagas";
import _ from "lodash";

const persistedState = loadState();

const routerMw = routerMiddleware(createBrowserHistory);
const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

function configureStoreProd() {
  const middlewares = [routerMw, sagaMiddleware];

  const store = createStore(
    rootReducers,
    persistedState,
    compose(applyMiddleware(...middlewares))
  );

  store.subscribe(
    _.throttle(() => {
      saveState({
        auth: store.getState().auth
      });
    }, 1000)
  );

  sagaMiddleware.run(rootSagas);
  store.close = () => store.dispatch(END);

  return store;
}

function configureStoreDev() {
  const middlewares = [
    reduxImmutableStateInvariant(),
    routerMw,
    sagaMiddleware,
    loggerMiddleware
  ];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(
    rootReducers,
    persistedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  store.subscribe(
    _.throttle(() => {
      saveState({
        auth: store.getState().auth
      });
    }, 1000)
  );

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      const nextReducer = require("../reducers").default;
      store.replaceReducer(nextReducer);
    });
  }
  sagaMiddleware.run(rootSagas);
  store.close = () => store.dispatch(END);

  return store;
}

const configureStore =
  process.env.NODE_ENV === "production"
    ? configureStoreProd
    : configureStoreDev;

export default configureStore;
