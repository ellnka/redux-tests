import {
    GAME_HAS_ERRORED,
    GAME_IS_LOADING,
    GAME_FETCH_DATA_SUCCESS,
    GAME_STARTED,
    GAME_FINISHED
} from "../actionTypes";


export function gameHasErrored(state = false, action) {
    switch (action.type) {
        case GAME_HAS_ERRORED:
            return action.hasErrored;

        default:
            return state;
    }
}

export function gameIsLoading(state = false, action) {
    switch (action.type) {
        case GAME_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function gameIsStarted(state = false, action) {
    switch (action.type) {
        case GAME_STARTED:
            return true;
        case GAME_FINISHED:
            return false;
        default:
            return state;
    }
}

export function game(state = {}, action) {
    switch (action.type) {
        case GAME_FETCH_DATA_SUCCESS:
            return action.game;

        default:
            return state;
    }
}
