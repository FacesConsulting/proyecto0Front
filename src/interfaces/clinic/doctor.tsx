
interface Ranking {
  puntuacion: number
}

export interface Especialidad {
  nombreEspecialidad: string
  documentoEspecialidad: File | null
}

export interface DoctorType {
  // Datos generales
  uid?: string
  curp: string
  nombre: string
  apellidos: string
  telefono: string
  fechaNacimiento?: Date | null
  correoElectronico: string
  password?: string
  confirmPassword: string

  // Domicilio
  codigoPostal: string
  estado: string
  municipio: string
  colonia: string
  calle: string
  numeroExterior: string
  numeroInterior: string

  // Informacion profesional
  cedulaProfesional: File | null
  titulo: File | null
  firma: File | null
  especialidad: Array<Especialidad>
  ranking?: Array<Ranking>
  rol: string

  // terminos y politicas
  terminos: boolean
  politicas: boolean
}
