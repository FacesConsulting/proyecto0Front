import { expresiones } from '@/utils/utils'
import * as yup from 'yup'

export const validationSchemaNewDoctor = yup.object().shape({
  curp: yup
    .string()
    .matches(expresiones.curp, {
      message: 'CURP Incorrecto.'
    })
    .required('Campo requerido.'),
  nombre: yup.string().matches(expresiones.onlyLetters, {
    message: 'Solo Letras.'
  }),
  apellido: yup
    .string()
    .matches(expresiones.onlyLetters, {
      message: 'Solo Letras.'
    })
    .required('Campo requerido.'),
  telefono: yup.string().required('Campo requerido.'),
  fechaDeNacimiento: yup.date().required('Campo requerido.'),
  email: yup.string().matches(expresiones.correo, {
    message: 'Correo invalido'
  }),
  password: yup
    .string()
    .min(8, 'La longitud de la contraseña es de minimo 8 carácteres.')
    .matches(expresiones.password, {
      message:
        'Tu contraseña debe contener al menos (1 letra mayúscula, 1 letra minúscula, 1 digito y 1 cracter especial) y depe ser de 8 - 15 caracteres.'
    })
    .required('Por favor ingresa tu contraseña.'),
  codigoPostal: yup
    .number()
    .max(5)
    .min(1)
    .required('Campo requerido.'),
  colonia: yup
    .string()
    .required('Campo requerido'),
  calle: yup
    .string()
    .matches(expresiones.soloLetrasYNumeros, {
      message: 'Solo numeros y letras'
    })
    .required('Campo requerido'),
  noInterior: yup
    .number(),
  cedula: yup
    .number()
    .max(8)
    .min(8)
    .required('Campo requerido'),
  titulo: yup
    .string()
    .matches(expresiones.onlyLetters, {
      message: 'Solo Letras'
    })
    .required('Campo requerido')
})
