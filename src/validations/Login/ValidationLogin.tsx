import * as yup from 'yup'

export const validationSchemaUser = yup.object().shape({
  email: yup
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
