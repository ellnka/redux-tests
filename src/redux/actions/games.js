import {
  GAMES_HAS_ERRORED,
  GAMES_IS_LOADING,
  GAMES_FETCH_DATA_SUCCESS
} from "../actionTypes";

export function gamesHasErrored(bool) {
  return {
    type: GAMES_HAS_ERRORED,
    hasErrored: bool
  };
}

export function gamesIsLoading(bool) {
  return {
    type: GAMES_IS_LOADING,
    isLoading: bool
  };
}

export function gamesFetchDataSuccess(games) {
  return {
    type: GAMES_FETCH_DATA_SUCCESS,
    games
  };
}

export function gamesFetch(url) {
  if (!url) return;

  return dispatch => {
    dispatch(gamesIsLoading(true));

    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      redirect: "error"
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(gamesIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(({ games }) => dispatch(gamesFetchDataSuccess(games)))
      .catch(error => {
        console.log(error);
        dispatch(gamesHasErrored(true));
      });
  };
}
