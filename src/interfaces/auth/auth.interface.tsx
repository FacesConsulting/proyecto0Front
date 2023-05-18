export interface LoginInterface {
  email: string
  password: string
}
export interface ResetPasswordInterface {
  id: string
  password: string
  confirmPassword: string
}
export interface EmailInterface {
  correoElectronico: string
}

export interface SingUpInterface {
  nombre: string
  apellidos: string
  correoElectronico: string
  password: string
  confirmPassword: string
  rol?: string
  terminos: boolean
  politicas: boolean
}

export type ClinicType = {
  razonSocial: string
  rfc: string
  direccion: string
  correoElectronico: string
  password: string
  logoSource: string
}
