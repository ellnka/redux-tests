import {
    GAME_HAS_ERRORED,
    GAME_IS_LOADING,
    GAME_FETCH_DATA_SUCCESS,
    GAME_STARTED,
    GAME_FINISHED
 
} from "../actionTypes";



export function gameStart() {
    return {
        type: GAME_STARTED
    }; 
}



export function gameHasErrored(bool) {
    return {
        type: GAME_HAS_ERRORED,
        hasErrored: bool
    };
}

export function gameIsLoading(bool) {
    return {
        type: GAME_IS_LOADING,
        isLoading: bool
    };
}

export function gameFetchDataSuccess(game) {
    console.log(game);
    return {
        type: GAME_FETCH_DATA_SUCCESS,
        game: game
    };
}

export function gameFetch(url) {
    if (!url) return;

    return dispatch => {
        dispatch(gameIsLoading(true));
        dispatch(gameStart());

        return fetch(url, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            redirect: 'error' 
        })
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(gameIsLoading(false));
                return response;
            })
            .then(response => response.json())
            .then((game) => dispatch(gameFetchDataSuccess(game)))
            .catch((error) => { console.log(error); dispatch(gameHasErrored(true)) });
    };
}
