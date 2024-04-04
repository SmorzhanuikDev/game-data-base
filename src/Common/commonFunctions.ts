import {format} from "date-fns";
import {esrb_rating} from "../Pages/GameDetails/gameDetailsTypes";

export const formatDate = (date: string) => {
    if (date) {
        return format(new Date(date), "MMM dd, yyyy")
    }
    return 'no date'
}

export const formatESRBRating = (rating: esrb_rating | null) => {
    if (rating) {
        switch (rating.slug) {
            case "rating-pending":
            case "everyone-10-plus":
            case "everyone": return rating.name
            case "teen": return rating.name + ' +13'
            case "mature": return rating.name + ' +17'
            case "adults-only": return rating.name + ' +18'
        }
    }
    return 'no rating'
}