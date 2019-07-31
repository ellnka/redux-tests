import { TESTS_HAS_ERRORED, TESTS_IS_LOADING, TESTS_FETCH_DATA_SUCCESS } from "../actionTypes";
import { TEST_START, QUESTION_SET, ANSWERS_COUNT_INCREMENT, SCORE_INCREMENT } from "../actionTypes";

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


export function test(state = {}, action) {
    switch (action.type) {
        case TEST_START:
            return action.test || null;

        default:
            return state;
    }
}


export function questionIndex(state = 0, action) {
    switch (action.type) {
        case QUESTION_SET:
            return action.questionIndex || state;
        default:
            return state;
    }
}

export function answersCount(state = 0, action) {
    switch (action.type) {
        case ANSWERS_COUNT_INCREMENT:
            return  state + 1;
        default:
            return state;
    }
}


export function score(state = 0, action) {
    console.log("score");
    console.log(state);
    switch (action.type) {
        case SCORE_INCREMENT:
            return state + 1;
        default:
            return state;
    }
}