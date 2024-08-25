import axios from 'axios'

const api = axios.create({
    baseURL:'https://e9b0-187-111-14-38.ngrok-free.app'
})

export default api