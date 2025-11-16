import {defaultResponse} from "../../Common/commonTypes";
import {commonApiRes} from "../Authorization/authTypes";

export const FETCH_USER = 'FETCH_USER'
export const LOG_IN = 'LOG_IN'

export interface gameListItem {
    id: number,
    name: string,
    gamesId: number[]
}

export interface user {
    login: string,
    name: string,
    password: string,
    gameLists: gameListItem[]
    ratedGames: any
}

export interface userResponse extends commonApiRes {
    user: user
}


