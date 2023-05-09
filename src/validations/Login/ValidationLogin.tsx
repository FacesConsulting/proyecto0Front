import { expresiones } from '@/utils/utils'
import * as yup from 'yup'

export const validationSchemaUser = yup.object().shape({
  correoElectronico: yup
    .string()
    .matches(
      /^\w+([.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/,
      {
        message: 'El usuario solo puede contener letras '
      }
    )
    .required('Por favor ingresa tu correo electrónico.'),
  password: yup
    .string()
    .min(8, 'La longitud de la contraseña es de minimo 8 carácteres')
    .matches(/[0-9]/, 'Requiere un número')
    .matches(/[a-z]/, 'Requiere una letra minuscula')
    .matches(/[A-Z]/, 'Requiere una letra mayúscula')
    .matches(/[^\w]/, 'Requiere un simbolo')
    .required('Por favor ingresa tu contraseña.')
})
export const validationSchemaEmail = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^\w+([.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/,
      {
        message: 'El usuario solo puede contener letras '
      }
    )
    .required('Por favor ingresa tu correo electrónico.')
})

export const validationSchemaSignUp = yup.object().shape({
  nombre: yup
    .string()
    .matches(expresiones.onlyLetters, {
      message: 'El usuario solo puede contener letras '
    })
    .required('Por favor ingresa tu Nombre.'),
  apellidos: yup
    .string()
    .matches(expresiones.onlyLetters, {
      message: 'Solo se admiten letras.'
    })
    .required('Por favor ingresa tus apellidos.'),
  correoElectronico: yup
    .string()
    .matches(expresiones.correo, {
      message: 'Ingresa un correo electronico valido.'
    })
    .required('Es necesario un correo elctronico.'),
  password: yup
    .string()
    .min(8, 'La longitud de la contraseña es de minimo 8 carácteres')
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
    .oneOf([true], 'Tiene que aceptar la politica de privacidad')
})
