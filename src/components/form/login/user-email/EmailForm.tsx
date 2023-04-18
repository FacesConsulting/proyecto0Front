"use client";

import { EmailInterface } from "@/interfaces/auth/auth.interface";
import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import { validationSchemaEmail } from "@/validations/Login/ValidationLogin";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";

const EmailForm = () => {
    const [initialValues] = useState<EmailInterface>({ email: "" });
    const [loading] = useState<boolean>(false)

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            enableReinitialize: true,
            validationSchema: validationSchemaEmail,
            initialValues,

            onSubmit: async (values, { resetForm }) => {
                console.log(values);
            },
        });

    return (
        <Box className="w-full px-4">
            <form onSubmit={handleSubmit} autoComplete="off">
                <h1 className="text-center text-sky-600 mb-4">Restablecer contraseña</h1>
                <p className="text-center text-indigo-400 mb-4 text-xs">Ingrese el correo electrónico asociado con su cuenta </p>
                <div className="mb-4">
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Correo electrónico"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        inputProps={{ maxLength: 30 }}
                        placeholder="joe_doe@example.com"
                    />
                </div>
                <div className="text-center box mb-4">
                    <Link href={"/forgot-password/reset-password"} className="text-center text-s text-indigo-500" >Enviar</Link>
                </div>
                <div className="text-center">
                    <Link href={"/"} className="text-center text-s text-indigo-500" >Regresar</Link>
                </div>
            </form>
        </Box>
    );
};

export default EmailForm;
