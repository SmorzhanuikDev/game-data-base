import {instance} from "./index";
import {gamesSearchParamsType, gamesListType} from "../Pages/Games/gamesTypes";
import {gameAdditionsType, gameDetailsType} from "../Pages/GameDetails/gameDetailsTypes";

export const gameAPI = {
    getGames: async (params: gamesSearchParamsType): Promise<gamesListType> => {
            const response = await instance.get<gamesListType>('games', {params})
            return response.data
    },
    getGameDetails: async (gameId: number): Promise<gameDetailsType> => {
            const response = await instance.get<gameDetailsType>(`games/${gameId}`)
            return response.data
    },
    getGameAdditions: async (gameId: number): Promise<gameAdditionsType> => {
            const response = await instance.get<gameAdditionsType>(`games/${gameId}/additions`)
            return response.data
    }
}