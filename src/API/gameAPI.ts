import {instance} from "./index";
import {gamesListType, gamesSearchParamsType} from "../Pages/Games/gamesTypes";
import {
    gameDetailsType,
    gameListType,
    gameScreenshotsType,
    storesListType,
} from "../Pages/GameDetails/gameDetailsTypes";

export const gameAPI = {
    getGames: async (params: gamesSearchParamsType): Promise<gamesListType> => {
        const response = await instance.get<gamesListType>('games', {
            params: {...params, search_exact: true, search_precise: true}
        })
        return response.data
    },
    getGameDetails: async (gameId: number): Promise<gameDetailsType> => {
        const response = await instance.get<gameDetailsType>(`games/${gameId}`)
        return response.data
    },
    getGameAdditions: async (gameId: number): Promise<gameListType> => {
        const response = await instance.get<gameListType>(`games/${gameId}/additions`, {
            params: {
                page_size: 30
            }
        })
        return response.data
    },
    getGameSeries: async (gameId: number): Promise<gameListType> => {
        const response = await instance.get<gameListType>(`games/${gameId}/game-series`, {
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
    },
    getGameStores: async (gameId: number): Promise<gameScreenshotsType> => {
        const response = await instance.get<gameScreenshotsType>(`games/${gameId}/stores`, {
            params: {
                page_size: 30
            }
        })
        return response.data
    },
    getStoresList: async (): Promise<storesListType> => {
        const response = await instance.get<storesListType>(`stores`, {
            params: {
                page_size: 30
            }
        })
        return response.data
    }
}