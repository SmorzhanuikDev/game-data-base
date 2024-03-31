import {instance} from "./index";
import {fetchGamesParamsType, gamesListType} from "../Pages/Games/types";

export const gameAPI = {
    getGames: async (params: fetchGamesParamsType): Promise<gamesListType> => {
            const response = await instance.get<gamesListType>('games', {params})
            return response.data
    }
}