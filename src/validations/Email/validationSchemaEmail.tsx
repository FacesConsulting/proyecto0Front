import { expresiones } from '@/utils/utils'
import * as yup from 'yup'

export const validationSchemaEmail = yup.object().shape({
  correoElectronico: yup
    .string()
    .matches(expresiones.correo, {
      message: 'Ingresa un correo electronico valido.'
    })
})
