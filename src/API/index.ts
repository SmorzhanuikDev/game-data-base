import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'de12c3781cbf437fb959b333da49c533'
    }
})

