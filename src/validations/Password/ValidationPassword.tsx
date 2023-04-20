import * as yup from "yup";

export const validationSchemaPassword = yup.object().shape({
    newPassword: yup
    .string()
    .min(8, 'La longitud de la contraseña es de minimo 8 carácteres')
    .matches(/[0-9]/, 'Requiere un número')
    .matches(/[a-z]/, 'Requiere una letra minuscula')
    .matches(/[A-Z]/, 'Requiere una letra mayúscula')
    .matches(/[^\w]/, 'Requiere un simbolo')
    .required("Por favor ingresa tu nueva contraseña"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Debe coincidir con el valor del campo "Nueva Contraseña"')
    .required("Por favor ingresa la confirmación de su contraseña"),
});

