import { combineReducers } from "redux";
import { games, gamesHasErrored, gamesIsLoading } from "./games";
import { game, gameHasErrored, gameIsLoading, gameIsStarted } from "./game";

export default combineReducers({
    games,
    gamesHasErrored,
    gamesIsLoading,
    game,
    gameIsStarted,
    gameHasErrored,
    gameIsLoading,
});
