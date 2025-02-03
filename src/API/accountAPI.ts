import {accountInstance, mainInstance} from "./index";
import {content} from "../Pages/CommonPage/commonPageTypes";

export const accountAPI = {
    logIn: async (password: string, login: string): Promise<content> => {
        const response = await accountInstance.get<content>('account', {
            params: {
                password,
                login
            }
        })
        return response.data
    },
}