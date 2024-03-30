import {instance} from "./index";

export const gameAPI = {
    getGames: async () => {
        try {
            const response = await instance.get('games')
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }
}