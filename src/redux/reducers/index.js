import { combineReducers } from "redux";
import { tests, testsHasErrored, testsIsLoading } from "./tests";
import { testStart as currentTest } from "./tests";

export default combineReducers({ tests, testsHasErrored, testsIsLoading, currentTest });
