import {gameType} from "../Games/gamesTypes";
import {defaultResponse} from "../../Common/commonTypes";

export const FETCH_GAME_DETAILS = 'FETCH_GAME_DETAILS'
export const FETCH_GAME_ADDITIONAL_CONTENT = 'FETCH_GAME_ADDITIONAL_CONTENT'
export const FETCH_GAME_SERIES = 'FETCH_GAME_SERIES'



export interface gameDetailsType extends gameType {
    name_original: string
    description: string
    metacritic_platforms: any[],
    background_image_additional: string
    website: string
    reactions: any
    screenshots_count: number
    movies_count: number
    creators_count: number
    achievements_count: number
    parent_achievements_count: number
    reddit_url: string
    reddit_name: string
    reddit_description: string
    reddit_logo: string
    reddit_count: number
    twitch_count: number
    youtube_count: number
    alternative_names: string[]
    metacritic_url: string
    parents_count: number
    additions_count: number
    game_series_count: number
    user_game: any
    developers: Array<{
        id: number
        name: string
        slug: string
        games_count: number
        image_background: string
    }>
    publishers: Array<{
        id: number
        name: string
        slug: string
        games_count: number
        image_background: string
    }>
    clip: any,
    description_raw: string
}

export interface gameAdditionsType {
    count: 6
    next: string | null
    previous: string | null
    results: gameType[]
}

export interface gameSeriesType extends defaultResponse {
    results: gameType[]
}





