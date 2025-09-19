import {accountInstance, mainInstance} from "./index";
import {content} from "../Pages/CommonPage/commonPageTypes";
import {token} from "../Pages/Authorization/authTypes";

export const accountAPI = {
    logIn: async (password: string, login: string): Promise<token> => {
        const response = await accountInstance.get<token>('account', {
            params: {
                password,
                login
            }
        })
        return response.data
    },
}