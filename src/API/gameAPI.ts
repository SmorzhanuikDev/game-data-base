import {instance} from "./index";
import {gamesSearchParamsType, gamesListType} from "../Pages/Games/gamesTypes";
import {
    gameAdditionsType,
    gameDetailsType,
    gameScreenshotsType,
    gameSeriesType
} from "../Pages/GameDetails/gameDetailsTypes";

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
        const response = await instance.get<gameAdditionsType>(`games/${gameId}/additions`, {
            params: {
                page_size: 30
            }

        })
        return response.data
    },
    getGameSeries: async (gameId: number): Promise<gameSeriesType> => {
        const response = await instance.get<gameSeriesType>(`games/${gameId}/game-series`, {
            params: {
                page_size: 30
            }
        })
        return response.data
    },
    getGameScreenshots: async (gameId: number): Promise<gameScreenshotsType> => {
        const response = await instance.get<gameScreenshotsType>(`games/${gameId}/screenshots`, {
            params: {
                page_size: 30
            }
        })
        return response.data
    }
}