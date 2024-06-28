import {instance} from "./index";
import {platforms} from "../Pages/Platforms/platformsTypes";

export const platformAPI = {
    getPlatforms: async (): Promise<platforms> => {
        const response = await instance.get<platforms>('platforms')
        return response.data
    },
}