import axios from "axios";

const token = localStorage.getItem('token')


export const mainInstance = axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'de12c3781cbf437fb959b333da49c533'
    }
})

export const accountInstance = axios.create({
    baseURL: 'https://gdb-api.onrender.com/',
    params: {
        token
    },
})

export const refreshToken = (token: string | undefined) => {
    accountInstance.interceptors.request.use(
        (config) => {
            config.params.token = token
            return config
        }
    )
}

