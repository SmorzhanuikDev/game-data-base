import {defaultResponse} from "../../Common/commonTypes";
import {gameSmallData} from "../Genres/genresTypes";

export const FETCH_DEVELOPERS = 'FETCH_DEVELOPERS'

export interface developers extends defaultResponse {
    results: developerItem[]
}

export interface developerItem {
    games: gameSmallData[]
    games_count: number
    id: number
    image_background: string | null
    name: string
    slug: string
}