import { expresiones } from '@/utils/utils'
import * as yup from 'yup'

export const validationSchemaPassword = yup.object().shape({
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
    .required('Este campo es obligatorio.')
})
