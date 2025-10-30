import {gameType} from "../Games/gamesTypes";
import {defaultResponse} from "../../Common/commonTypes";

export const FETCH_AUTH_USER = 'FETCH_AUTH_USER'
export const FETCH_TOKEN = 'FETCH_TOKEN'


export interface commonApiRes {
    success: boolean
    message: string
}

export interface token extends commonApiRes {
    token?: string
}
export interface singInData {
    login: string
    password: string
}

export interface currentUser {
    login: string,
    name: string,
    password: string,
    token: string,
    gameLists: [
        {
            id: number,
            name: string,
            gamesId: number[]
        }
    ]
    ratedGames: any
}




