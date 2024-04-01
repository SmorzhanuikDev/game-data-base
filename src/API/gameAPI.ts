import {instance} from "./index";
import {gamesSearchParamsType, gamesListType} from "../Pages/Games/gamesTypes";

export const gameAPI = {
    getGames: async (params: gamesSearchParamsType): Promise<gamesListType> => {
            const response = await instance.get<gamesListType>('games', {params})
            return response.data
    }
}