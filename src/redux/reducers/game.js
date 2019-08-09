import {
  GAME_HAS_ERRORED,
  GAME_IS_LOADING,
  GAME_FETCH_DATA_SUCCESS,
  GAME_STARTED,
  SET_QUESTION,
  GAME_FINISHED,
  GAME_RESET
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
    default:
      return state;
  }
}

export function gameIsFinished(state = false, action) {
  switch (action.type) {
    case GAME_FINISHED:
      return true;
    default:
      return state;
  }
}

export function game(state = null, action) {
  switch (action.type) {
    case GAME_FETCH_DATA_SUCCESS:
      return action.game;
    case GAME_RESET:
      return null;
    default:
      return state;
  }
}

export function gameCurrentQuestionId(state = 0, action) {
  switch (action.type) {
    case SET_QUESTION:
      return action.question_id;

    default:
      return state;
  }
}
