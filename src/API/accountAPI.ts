import {accountInstance} from "./index";
import {singUpData, tokenRes} from "../Pages/Authorization/authTypes";
import {changePassData, userRes} from "../Pages/Account/accountTypes";


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
    getUser: async (): Promise<userRes> => {
        const response = await accountInstance.get<userRes>('user')
        return response.data
    },
    createAccount: async (singUpData: singUpData): Promise<tokenRes> => {
        const response = await accountInstance.post<tokenRes>('account', singUpData)
        return response.data
    },
    changePassword: async (changePassData: changePassData): Promise<tokenRes> => {
        const response = await accountInstance.put<tokenRes>('account/pass', changePassData)
        return response.data
    }
}