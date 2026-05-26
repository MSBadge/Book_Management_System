import axios from 'axios'


const api = axios.create({
    baseURL : 'http://127.0.0.1:8000/library'
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