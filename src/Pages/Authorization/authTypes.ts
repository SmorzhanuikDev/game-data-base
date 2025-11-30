import {gameType} from "../Games/gamesTypes";
import {defaultResponse} from "../../Common/commonTypes";

export const FETCH_TOKEN = 'FETCH_TOKEN'
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT'


export interface commonApiRes {
    success: boolean
    message: string
}

export interface tokenRes extends commonApiRes {
    token?: string
}
export interface singInFormData {
    login: string
    password: string
}
export interface singUpFormData {
    login: string
    name: string
    password: string
    passwordConfirm: string
}
export interface singUpData {
    login: string
    name: string
    password: string
}

export interface changeNameRes extends commonApiRes {
    newName: string
}



