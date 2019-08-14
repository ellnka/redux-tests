import {
  GAME_HAS_ERRORED,
  GAME_IS_LOADING,
  GAME_FETCH_DATA_SUCCESS,
  GAME_STARTED,
  SET_QUESTION,
  GAME_ANSWERED,
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
    case GAME_RESET:
      return false;
    default:
      return state;
  }
}

export function gameCurrentAnswerId(state = "", action) {
  switch (action.type) {
    case GAME_ANSWERED:
      return action.answer || "";
    case SET_QUESTION:
      return "";
    default:
      return state;
  }
}

export function gameIsFinished(state = false, action) {
  switch (action.type) {
    case GAME_FINISHED:
      return true;
    case GAME_STARTED:
      return false;
    case GAME_RESET:
      return false;
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

export function gameAnswers(state = [], action) {
  switch (action.type) {
    case GAME_ANSWERED:
      return action.answers;
    case GAME_STARTED:
      return [];
    case GAME_RESET:
      return [];
    default:
      return state;
  }
}

export function gameCurrentQuestionId(state = "", action) {
  switch (action.type) {
    case SET_QUESTION:
      return action.question_id;
    case GAME_RESET:
      return "";

    default:
      return state;
  }
}
