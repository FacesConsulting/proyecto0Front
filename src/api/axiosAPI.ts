import axios from 'axios'

//* Develop */
export const api = axios.create({
  baseURL: 'http://localhost:8082/',
  headers: { 'Content-Type': 'application/json' }
})

//* Remota */
// export const api = axios.create({
//   baseURL: 'http://localhost:8081/',
//   headers: { 'Content-Type': 'application/json' }
// })

//* Produccion */
// export const api = axios.create({
//   baseURL: 'https://isc-web.vercel.app/api/',
//   headers: { 'Content-Type': 'application/json' }
// })
