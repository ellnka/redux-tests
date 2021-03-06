import {
  GAMES_HAS_ERRORED,
  GAMES_IS_LOADING,
  GAMES_FETCH_DATA_SUCCESS
} from "../actionTypes";

export function gamesHasErrored(state = false, action) {
  switch (action.type) {
    case GAMES_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
}

export function gamesIsLoading(state = false, action) {
  switch (action.type) {
    case GAMES_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function games(state = [], action) {
  switch (action.type) {
    case GAMES_FETCH_DATA_SUCCESS:
      return action.games;

    default:
      return state;
  }
}
