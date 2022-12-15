import { Api } from './axios.config'

const RANDOM_JOKE_URL = 'jokes/random'

export const getRandomJoke = async () => {
    try {
        const response = await Api.get(RANDOM_JOKE_URL)
        return response.data
    } catch (error) {
        alert(error)
        return null
    }
}