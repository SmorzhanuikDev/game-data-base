import {instance} from "./index";
import {gamesListType} from "../Pages/Games/types";

export const gameAPI = {
    getGames: async (params: { page: number, page_size: number }): Promise<gamesListType> => {
            const response = await instance.get<gamesListType>('games')
            console.log(response)
            return response.data
    }
}