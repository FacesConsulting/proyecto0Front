import { Dayjs } from 'dayjs'

interface Ranking {
  puntuacion: number
}

export type DoctorType = {
  nombres: string
  apellidos: string
  fecha_nacimiento?: Dayjs | null
  telefono: string
  curp: string
  cedula_profesional: string
  titulo: string
  especialidad: string
  ranking?: Array<Ranking>
  direccion: string
  uid?: string
  correo: string
  password: string
  tipo_registro: string
  codigo_postal: string
}
