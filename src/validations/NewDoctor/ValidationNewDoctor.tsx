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
  apellidos: yup
    .string()
    .matches(expresiones.onlyLetters, {
      message: 'Solo Letras.'
    })
    .required('Campo requerido.'),
  telefono: yup.string().required('Campo requerido.'),
  fechaNacimiento: yup.date().required('Campo requerido.'),
  correoElectronico: yup.string().matches(expresiones.correo, {
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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Las contrasenas no coinciden.')
    .required('Este campo es obligatorio.'),
  terminos: yup
    .bool()
    .oneOf([true], 'Debes aceptar los términos y condiciones.')
    .required()
    .default(false),
  politicas: yup
    .bool()
    .oneOf([true], 'Debes aceptar las politicas de privacidad.')
    .required()
    .default(false),
  codigoPostal: yup.number().required('Campo obligtorio'),
  calle: yup
    .string()
    .matches(expresiones.soloLetrasYNumeros, {
      message: 'Solo numeros y letras'
    })
    .required('Campo requerido')
})
