import axios from 'axios'

const http = axios.create({
  baseURL: 'https://api.github.com/'
})

export const getRepos = user => http.get(`users/${user}/repos`)
