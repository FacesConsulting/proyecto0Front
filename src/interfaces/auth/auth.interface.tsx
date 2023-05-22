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

export interface ClinicType {
  // Datos tecnicos
  razonSocial: string
  rfc: string
  telefono: string
  // Localizacion
  codigoPostal: string
  estado: string
  municipio: string
  colonia: string
  calle: string
  numeroExterior: string
  numeroInterior: string
  // Credenciales
  correoElectronico: string
  password: string
  confirmPassword: string
  plataforma: string
  // Logo
  logoSource: File | null
  // Terminos
  terminos: boolean
  politicas: boolean
}
