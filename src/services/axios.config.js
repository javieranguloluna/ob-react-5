import axios from 'axios'

const BASE_URL = 'https://api.chucknorris.io/'

export const Api = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    responseType: 'json'
})