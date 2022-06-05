import axios from "axios"
// for demonstration purposes the hash is hardcoded, env variable are ready and configured if needed
// syntax with import.meta is cause of using vite and not CRA
const hash = import.meta.env.HASH || "50e694833cdd1127bad6e4c5e4c407f8"
const publicApiKey = "f60478c6170145b94ef1165399b68a94"
const API = axios.create({ baseURL: `https://gateway.marvel.com:443/v1/public/` })

export const fetchCharacters = (params) => API.get(`/characters?ts=1&apikey=${publicApiKey}&hash=${hash}&limit=${params.limit}`)

/* export const fetchPosts = () => API.get('/posts')
export const createPost = (newPost) => API.post("/posts", newPost)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)

export const fetchScores = () => API.get('/scores')
export const createScore = (newScore) => API.post("/scores", newScore)
export const deleteScore = (id) => API.delete(`/scores/${id}`)

export const signIn = (formData) => API.post("/user/signin", formData)
export const signUp = (formData) => API.post("/user/signup", formData) */