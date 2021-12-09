import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://eva-test.herokuapp.com'
})