import { combineReducers } from "redux";
import { games, gamesHasErrored, gamesIsLoading } from "./games";
import {
  game,
  gameAnswers,
  gameHasErrored,
  gameIsLoading,
  gameIsStarted,
  gameCurrentAnswerId,
  gameIsFinished,
  gameCurrentQuestionId
} from "./game";

export default combineReducers({
  games,
  gamesHasErrored,
  gamesIsLoading,
  game,
  gameAnswers,
  gameIsStarted,
  gameCurrentAnswerId,
  gameIsFinished,
  gameCurrentQuestionId,
  gameHasErrored,
  gameIsLoading
});
