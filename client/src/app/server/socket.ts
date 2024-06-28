import io from 'socket.io-client'

import { vite_host, vite_localhost } from '../config/config'

const url = import.meta.env.DEV ? `${vite_localhost}` : `${vite_host}`

export const socket = io(url)

