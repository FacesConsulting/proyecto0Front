import * as yup from "yup";

export const validationSchemaUser = yup.object().shape({
    user: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÿ\s]{1,40}$/, {
      message: "El usuario solo puede contener letras y acentos",
    })
    .required("Es un campo obligatorio"),
    password: yup
    .string()
    .min(8, 'La longitud de la contraseña es de minimo 8 carácteres')
    .matches(/[0-9]/, 'Requiere un número')
    .matches(/[a-z]/, 'Requiere una letra minuscula')
    .matches(/[A-Z]/, 'Requiere una letra mayúscula')
    .matches(/[^\w]/, 'Requiere un simbolo')
    .required("Es un campo obligatorio"),
});

