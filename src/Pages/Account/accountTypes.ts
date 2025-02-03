
export const FETCH_USER = 'FETCH_USER'

export interface gameListItem {
    id: number,
    name: string,
    gamesId: number[]
}

export interface user {
    login: string,
    name: string,
    password: string,
    token: string,
    gameLists: gameListItem[]
}
