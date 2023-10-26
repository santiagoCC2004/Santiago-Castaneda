import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost5001/api',
    withCredentials: true
})

export default instance