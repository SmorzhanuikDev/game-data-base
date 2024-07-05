import {defaultResponse} from "../../Common/commonTypes";

export const FETCH_CONTENT = 'FETCH_CONTENT'

export interface content extends defaultResponse {
    results: contentItem[]
}

export interface contentItem {
    games: gameSmallData[]
    games_count: number
    id: number
    image_background: string | null
    name: string
    slug: string
}

export interface gameSmallData {
    id: number
    slug: string
    name: string
    added: number
}