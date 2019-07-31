import { combineReducers } from "redux";
import { tests, testsHasErrored, testsIsLoading } from "./tests";
import { test, questionIndex, answersCount, score } from "./tests";

export default combineReducers({ tests, testsHasErrored, testsIsLoading, test, questionIndex, answersCount, score });
