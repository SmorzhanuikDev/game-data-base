import {RootState} from "../redux-store";

export const gameSelectors = {
    selectGames: (state:RootState) => state.games
}