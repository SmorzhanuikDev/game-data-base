import {defaultResponse} from "../../Common/commonTypes";

export const FETCH_GENRES = 'FETCH_GENRES'

export interface genresType extends defaultResponse {
    results: genreType[]
}

export interface genreType {
    games_count: number
    id: number
    image_background: string
    name: string
    slug: string
    games: gameFromGenre[]
}

export interface gameFromGenre {
    added: number
    id: number
    name: string
    slug: string
}
