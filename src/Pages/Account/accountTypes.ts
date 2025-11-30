import {commonApiRes} from "../Authorization/authTypes";

export const FETCH_USER = 'FETCH_USER'
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
export const CHANGE_NAME = 'CHANGE_NAME'
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT'

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

export interface userRes extends commonApiRes {
    user: user
}

export interface changePassData {
    newPassword: string;
    oldPassword: string;
}


