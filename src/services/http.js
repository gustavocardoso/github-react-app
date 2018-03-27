import axios from 'axios'

const http = axios.create({
  baseURL: 'https://api.github.com/'
})

export const getUerInfo = user => http.get(`users/${user}`)
export const getRepos = user => http.get(`users/${user}/repos`)
