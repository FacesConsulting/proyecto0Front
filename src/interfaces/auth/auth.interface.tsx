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
  rol?: string
  terminos: boolean
  politicas: boolean
}

export interface ClinicType {
  // Datos tecnicos
  razonSocial: string
  rfc: string
  // Localizacion
  codigo_postal: string
  estado: string
  municipio: string
  colonia: string
  calle: string
  numero_exterior: string
  numero_interior: string
  // Credenciales
  correoElectronico: string
  password: string
  confirmPassword: string
  // Logo
  logoSource: File | string
  // Terminos
  terminos: boolean
  politicas: boolean
}
