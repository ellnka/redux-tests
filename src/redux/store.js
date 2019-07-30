import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import rootReducer from "./reducers";


export default function store() {
    console.log("store");
    return createStore(
        rootReducer,
        compose(applyMiddleware(thunk, logger))
    );
}