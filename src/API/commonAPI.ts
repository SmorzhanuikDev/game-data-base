import {instance} from "./index";
import {content} from "../Pages/CommonPage/commonPageTypes";
import {genresDetailType} from "../Pages/Games/gamesTypes";

export const commonAPI = {
    getContent: async (endpoint: string, page: number): Promise<content> => {
        const response = await instance.get<content>(endpoint.slice(1, endpoint.length), {
            params: {
                page,
                page_size: 40
            }
        })
        return response.data
    },
    getGenreDetails: async (id: string): Promise<genresDetailType> => {
        const response = await instance.get<genresDetailType>(`genres/${id}`)
        return response.data
    },
}