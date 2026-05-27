import axios from 'axios'


const isDevelopment = import.meta.env.MODE === 'development'
const myBaseURL = isDevelopment ? import.meta.env.VITE_API_BASE_URL_LOCAL : import.meta.env.VITE_API_BASE_URL_DEPLOY

const api = axios.create({
    baseURL : myBaseURL,
})

// List data
export const listBook = () => {
    return api.get('/book/')
}

// delete book
export const deleteBook = (id) => {
    return api.delete(`/book/${id}/`)
}

// post book
export const postBook = (formData) => {
    return api.post('/book/', formData)
}

// update book
export const updateBook = (id, formData) => {
    return api.put(`/book/${id}/`, formData)
}