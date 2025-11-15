import {accountInstance} from "./index";
import {singUpData, tokenRes} from "../Pages/Authorization/authTypes";

export const accountAPI = {
    logIn: async (password: string, login: string): Promise<tokenRes> => {
        const response = await accountInstance.get<tokenRes>('account', {
            params: {
                password,
                login
            }
        })
        return response.data
    },
    createAccount: async (singUpData: singUpData): Promise<tokenRes> => {
        const response = await accountInstance.post<tokenRes>('account', singUpData)
        return response.data
    },
}