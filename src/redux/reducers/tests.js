import { TESTS_HAS_ERRORED, TESTS_IS_LOADING, TESTS_FETCH_DATA_SUCCESS } from "../actionTypes";
import { TEST_START } from "../actionTypes";

export function testsHasErrored(state = false, action) {
    switch (action.type) {
        case TESTS_HAS_ERRORED: 
            return action.hasErrored;

        default:
            return state;
    }
}

export function testsIsLoading(state = false, action) {
    switch (action.type) {
        case TESTS_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function tests(state = [], action) {
    switch (action.type) {
        case TESTS_FETCH_DATA_SUCCESS:
            return action.tests;

        default:
            return state;
    }
}


export function testStart(state = {}, action) {
    console.log("testStart");
    console.log(action);
    console.log(state);
    switch (action.type) {
        case TEST_START:
            return action.currentTest || state;

        default:
            return state;
    }
}