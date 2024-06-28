import {defaultResponse} from "../../Common/commonTypes";
import {gameSmallData} from "../Genres/genresTypes";

export const FETCH_PLATFORMS = 'FETCH_PLATFORMS'

export interface platforms extends defaultResponse {
    results: platformItem[]
}

export interface platformItem {
    games: gameSmallData
    games_count: number
    id: number
    image: string | null
    image_background: string | null
    name: string
    slug: string
    year_end: null | number
    year_start: null | number
}