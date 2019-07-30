import { TESTS_HAS_ERRORED, TESTS_IS_LOADING, TESTS_FETCH_DATA_SUCCESS } from "../actionTypes";
import { TEST_START } from "../actionTypes";

export function testsHasErrored(bool) {
    return {
        type: TESTS_HAS_ERRORED,
        hasErrored: bool
    };
}

export function testsIsLoading(bool) {
    return {
        type: TESTS_IS_LOADING,
        isLoading: bool
    };
}

export function testsFetchDataSuccess(tests) {
    return {
        type: TESTS_FETCH_DATA_SUCCESS,
        tests
    };
}

export function testsFetch(url) {
    console.log("fetchTests");
    console.log(url);
    return (dispatch) => {
        dispatch(testsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(testsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then(({ tests }) => dispatch(testsFetchDataSuccess(tests)))
            .catch(() => dispatch(testsHasErrored(true)));
    };
};


export function testStart(test) {
    return {
        type: TEST_START,
        currentTest: test
    };
}