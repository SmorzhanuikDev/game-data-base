import {genresType} from "../Pages/Genres/genresTypes";
import {instance} from "./index";
import {platformsType} from "../Pages/Platforms/platformsTypes";

export const platformAPI = {
    getPlatforms: async (): Promise<platformsType> => {
        const response = await instance.get<platformsType>('platforms')
        return response.data
    },
}