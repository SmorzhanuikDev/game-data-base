export const FETCH_GAME_DETAILS = 'FETCH_GAME_DETAILS'
export interface fetchGameDetailsType {
    type: typeof FETCH_GAME_DETAILS,
    id: number
}


export interface gameDetailsType {
    id: number
    slug: string
    name: string
    released: string
    tba: boolean
    background_image: string
    rating: number
    rating_top: number
    ratings: usersRatings[]
    ratings_count: number
    reviews_text_count: string
    added: number
    added_by_status: {
        yet: number
        owned: number
        beaten: number
        toplay: number
        dropped: number
        playing: number

    }
    metacritic: number
    playtime: number
    suggestions_count: number
    updated: string
    esrb_rating: {
        id: number
        name: string
        slug: string
    } | null
    platforms: Array<{
        "platform": {

            "id": number
            "name": string
            "slug": string
            "image": string | null
            "year_end": string | null,
            "year_start": string | null
            "games_count": number
            "image_background": string | null
        },
        "released_at": string
        "requirements_en": {
            "minimum": string
            "recommended": string
        },
        "requirements_ru": null
    }>
    reviews_count: number
    saturated_color: string | null
    dominant_color: string | null
    parent_platforms: Array<{
        platform: {
            id: number
            name: string
            slug: string
        }
    }>
    genres: Array<{
        id: number
        name: string
        slug: string
        games_count: string
        image_background: string
    }>
    stores: Array<{
        id: number
        store: {
            id: number
            name: string
            slug: string
            domain: string
            games_count: number
            image_background: string
        }
    }>
    tags: Array<{
        id: number
        name: string
        slug: string
        language: string
        games_count: number
        image_background: string
    }>
    short_screenshots: Array<{
        id: number
        image: string
    }>



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


export interface usersRatings {
    id: number
    title: string
    count: number
    percent: number
}





