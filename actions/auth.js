import axios from "axios"
const baseUrl = 'https://jaivik-amruth.herokuapp.com'

export const signup = (body) => {
  return axios.post(`${baseUrl}/signup`, body)
}

export const login = (body) => {
  return axios.post(`${baseUrl}/login`, body)
}