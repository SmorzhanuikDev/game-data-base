
export const FETCH_GAME_LIST = 'FETCH_GAME_LIST'
export interface fetchGamesListType {
    type: typeof FETCH_GAME_LIST,
    params: gamesSearchParamsType
}
export interface gamesSearchParamsType {
    page?: number
    page_size?: number
    search?: string
    parent_platforms?: string
    platforms?: string
    stores?: string
    developers?: string
    publishers?: string
    genres?: string
    tags?: string
    creators?: string
    dates?: string
    metacritic?: string
}


export interface gamesListType {
    count: 865190,
    next: string | null
    previous: string | null,
    results: gameType[]
    seo_title: string
    seo_description: string
    seo_keywords: string
    seo_h1: string
    noindex: boolean
    nofollow: boolean
    description: string
    filters: {
        "years": Array<{
            "from": number
            "to": number
            "filter": string
            "decade": number
            "years": Array<{
                "year": number
                "count": number
                "nofollow": boolean
            }>
            "nofollow": boolean
            "count": number
        }>
    }
    nofollow_collections: string[]
}

export interface gameType {
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
    esrb_rating: esrb_rating | null
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
}

export interface usersRatings {
    id: number
    title: string
    count: number
    percent: number
}

export interface esrb_rating {
    id: number
    slug: "everyone" | "everyone-10-plus" | "teen" | "mature" | "adults-only" | "rating-pending"
    name: "Everyone" | "Everyone 10+" | "Teen" | "Mature" | "Adults Only" | "Rating Pending"
}