import {instance} from "./index";
import {genresType} from "../Pages/Genres/genresTypes";

export const genreAPI = {
    getGenres: async (): Promise<genresType> => {
        const response = await instance.get<genresType>('genres')
        return response.data
    },
}