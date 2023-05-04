import axios from 'axios'

//* Develop */
export const api = axios.create({
  baseURL: 'http://192.168.0.15:8081/',
  headers: { 'Content-Type': 'application/json'
}
})

//* Remota */
// export const api = axios.create({
//   baseURL: 'http://192.168.0.7:8081/',
//   headers: { 'Content-Type': 'application/json' }
// })

//* Produccion */
// export const api = axios.create({
//   baseURL: 'https://isc-web.vercel.app/api/',
//   headers: { 'Content-Type': 'application/json' }
// })