import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";
import Geolocation from "./modules/geolocation";
import Walk from "./modules/walk";
import Guide from "./modules/guide";
import Profile from "./modules/profile";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    user: User,
    geolocation: Geolocation,
    walk: Walk,
    guide: Guide,
    profile: Profile,
    router: connectRouter(history),
  });

  const middlewares = [thunk.withExtraArgument({ history: history })];

  const env = process.env.NODE_ENV;

  if (env === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
  }

  const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();