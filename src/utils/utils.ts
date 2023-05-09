import { api } from '@/api/axiosAPI'
import { AxiosResponse } from 'axios'
import * as crypto from 'crypto'
import { JWTPayload, JWTVerifyOptions, jwtVerify } from 'jose'

// interface jwtPayload {
//   id: string
//   nombre: string
//   apellidos: string
//   correoElectronico: string
//   jti: string
//   expiresAt: Date
//   issuedAt: Date
// }

export async function decodeJWT (
  jwtToken: string,
  jwtSecret: string
): Promise<JWTPayload> {
  const jwtVerifyOptions: JWTVerifyOptions = {
    algorithms: ['HS256'],
    issuer: 'http://consulta-ya.com.mx'
  }

  const key: Uint8Array = new TextEncoder().encode(jwtSecret)
  const { payload } = await jwtVerify(jwtToken, key, jwtVerifyOptions)
  return payload as JWTPayload
}

export const fetchingDataEncrypted = async (
  data: string,
  url: string,
  method: string
): Promise<AxiosResponse> => {
  const key = crypto.randomBytes(16)
  const iv = crypto.randomBytes(16)

  // Crear instancia de cifrado
  const cipher = crypto.createCipheriv('aes-128-cbc', key, iv)

  // Cifrar los datos
  let encryptedData = cipher.update(data, 'utf8', 'base64')
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

export const expresiones = {
  onlyLetters: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{10}$/, // 10 numeros.
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/, // 8 a 15 digitos.
  numerosPositivos: /^\d*$/, // Solo números positivos
  soloLetrasYNumeros: /^[a-zA-Z0-9À-ÿ.,\s]+$/, // Solo letras y numeros
  curp: /^[A-Z]{4}\d{6}[H,M][A-Z]{5}[0-9,A-Z]{2}$/,
  cedulaProfesional: /^[A-Z]{4}\d{6}[A-Z]?\d{2}$/,
  onlyNumbers: /^\d{1,5}$/
}

/**
 * Convierte un tamaño en bytes a una cadena de texto con su equivalente en KB, MB, GB o TB.
 * @param {number} bytes - Tamaño en bytes.
 * @param {number} [decimals=2] - Número de decimales a mostrar en el resultado. Por defecto es 2.
 * @returns {string} Cadena de texto con el tamaño formateado y su unidad correspondiente.
 */
export const formatBytes = (
  bytes: number | undefined,
  decimals: number = 2
): string => {
  if (bytes === undefined) return ''
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}
