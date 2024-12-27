import axios from 'axios'

// import { vite_host, vite_localhost } from '../../config/config'

const url = 'http://localhost:8080'

export const api = axios.create({ baseURL: url })