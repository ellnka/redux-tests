import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import rootReducer from "./reducers";

export default function store() {
  return createStore(rootReducer, compose(applyMiddleware(thunk, logger)));
}
