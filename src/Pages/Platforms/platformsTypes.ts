import {defaultResponse} from "../../Common/commonTypes";

export const FETCH_PLATFORMS = 'FETCH_PLATFORMS'

export interface platformsType extends defaultResponse {
    results: platform[]
}

export interface platform {

}