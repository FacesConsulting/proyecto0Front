import { Dayjs } from 'dayjs'

interface Ranking {
  puntuacion: number
}

export type Especialidad = {
  especialidad: string
  archivo: File | null
  nombreArchivo? : string
  sizeArchivo?: number
}

export type DoctorType = {
  // Datos generales
  uid?: string
  curp: string
  nombres: string
  apellidos: string
  telefono: string
  fecha_nacimiento?: Dayjs | null
  correo: string
  password?: string

  // Domicilio
  codigo_postal: string
  estado: string
  municipio: string
  colonia: string
  calle: string
  numero_exterior: string
  numero_interior: string

  // Informacion profesional
  cedula_profesional: string
  titulo: string
  especialidad: Array<Especialidad>
  ranking?: Array<Ranking>
  tipo_registro: string
}
