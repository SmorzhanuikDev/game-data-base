import {instance} from "./index";
import {developers} from "../Pages/Developers/developersTypes";

export const developersAPI = {
    getDevelopers: async (page: number): Promise<developers> => {
        const response = await instance.get<developers>('developers', {
            params: {
                page,
                page_size: 20
            }
        })
        return response.data
    },
}