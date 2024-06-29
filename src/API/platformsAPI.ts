import {instance} from "./index";
import {platforms} from "../Pages/Platforms/platformsTypes";

export const platformAPI = {
    getPlatforms: async (page: number): Promise<platforms> => {
        const response = await instance.get<platforms>('platforms', {
            params: {
                page_size: 40,
                page
            }
        })
        return response.data
    },
}