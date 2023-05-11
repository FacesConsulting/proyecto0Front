export interface LoginInterface {
  email: string
  password: string
}
export interface ResetPasswordInterface {
  newPassword: string
  confirmPassword: string
}
export interface EmailInterface {
  email: string
}

export interface SingUpInterface {
  nombre: string
  apellidos: string
  correoElectronico: string
  password: string
  confirmPassword: string
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
