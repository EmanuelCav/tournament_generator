import axios from 'axios'

import { vite_host, vite_localhost } from '../../config/config'

const url = import.meta.env.DEV ? `${vite_localhost}` : `${vite_host}`

export const api = axios.create({ baseURL: url})