import {instance} from "./index";
import {content} from "../Pages/CommonPage/commonPageTypes";
import {genresDetailType, commonItemDataType, tagsType} from "../Pages/Games/gamesTypes";

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
    getTags: async (page: number): Promise<tagsType> => {
        const response = await instance.get<tagsType>(`tags`, {params: {
            page,
            page_size: 40
            }})
        return response.data
    },
    getCurrentTag: async (id: number): Promise<commonItemDataType> => {
        const response = await instance.get<commonItemDataType>(`tags/${id}`)
        return response.data
    },
    getDevelopers: async (id: number): Promise<commonItemDataType> => {
        const response = await instance.get<commonItemDataType>(`developers/${id}`)
        return response.data
    },

}