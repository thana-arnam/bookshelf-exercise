import axios from "axios"

const api = axios.create({
    baseURL: "https://bookshelf-api.fly.dev"
})

export default api
