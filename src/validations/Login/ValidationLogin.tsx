import * as yup from "yup";

export const validationSchemaUser = yup.object().shape({
    user: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÿ\s]{1,40}$/, {
      message: "El nombre solo puede contener letras y acentos",
    })
    .required("Es un campo obligatorio"),
});
