import { api } from '@/api/axiosAPI'
import { ClinicType } from '@/interfaces/auth/auth.interface'
import { DoctorType } from '@/interfaces/clinic/doctor'
import { AxiosResponse } from 'axios'
import * as crypto from 'crypto'
import { JWTPayload, JWTVerifyOptions, jwtVerify } from 'jose'

export const decodeJWT = async (
  jwtToken: string,
  jwtSecret: string
): Promise<JWTPayload> => {
  const jwtVerifyOptions: JWTVerifyOptions = {
    algorithms: ['HS256'],
    issuer: 'http://consulta-ya.com.mx'
  }

  const key: Uint8Array = new TextEncoder().encode(jwtSecret)
  const { payload } = await jwtVerify(jwtToken, key, jwtVerifyOptions)
  return payload
}
/**
 * Envia datos cifrados a una direccion URL utilizando la biblioteca criptográfica nativa de Node.js.
 *
 * @async
 * @function fetchingDataEncrypted
 * @param {string} data - Los datos que se van a cifrar previamente serializados.
 * @param {string} url - La dirección URL donde se enviarán los datos cifrados.
 * @param {string} method - El método HTTP que se utilizará para enviar los datos cifrados.
 * @returns {Promise<AxiosResponse>} - Una promesa que se resuelve en un objeto AxiosResponse.
 */
export const fetchingDataEncrypted = async (
  data: string,
  url: string,
  method: string
): Promise<AxiosResponse> => {
  const key = crypto.randomBytes(16)
  const iv = crypto.randomBytes(16)

  // Crear instancia de cifrado
  const cipher = crypto.createCipheriv('aes-128-cbc', key, iv)

  console.log(data)

  // Cifrar los datos
  let encryptedData = cipher.update(data, 'utf-8', 'base64')
  encryptedData += cipher.final('base64')

  const res = api.post(
    url,
    JSON.stringify({
      data: encryptedData,
      key: key.toString('base64'),
      iv: iv.toString('base64')
    })
  )

  return res
}

export const preparedFormDataClinic = (values: ClinicType) => {
  const key = crypto.randomBytes(16)
  const iv = crypto.randomBytes(16)

  // Crear instancia de cifrado
  const cipher = crypto.createCipheriv('aes-128-cbc', key, iv)

  // Cifrar los datos
  let encryptedData = cipher.update(JSON.stringify(values), 'utf-8', 'base64')
  encryptedData += cipher.final('base64')

  const formData = new FormData()
  formData.append('data', encryptedData)
  formData.append('key', key.toString('base64'))
  formData.append('iv', iv.toString('base64'))
  if (values.logoSource !== null) {
    formData.append('logo', values.logoSource)
  }
  return formData
}

export const preparedFormDataDoctor = (values: DoctorType) => {
  const key = crypto.randomBytes(16)
  const iv = crypto.randomBytes(16)

  // Crear instancia de cifrado
  const cipher = crypto.createCipheriv('aes-128-cbc', key, iv)

  // Cifrar los datos
  let encryptedData = cipher.update(JSON.stringify(values), 'utf-8', 'base64')
  encryptedData += cipher.final('base64')

  const formData = new FormData()
  formData.append('data', encryptedData)
  formData.append('key', key.toString('base64'))
  formData.append('iv', iv.toString('base64'))
  if (values.especialidad !== null) {
    for (const element of values.especialidad) {
      formData.append(('especialidad '), element.especialidad)
    }
  }
  return formData
}
