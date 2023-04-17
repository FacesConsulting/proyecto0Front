"use client";

import { ContraseniaInterface } from "@/interfaces/cambiarContrasenia/contrasenia.interface";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from 'formik'
import { validationSchemaPassword } from "@/validations/Password/ValidationPassword";
import { LoadingButton } from '@mui/lab'
import { Box, TextField } from "@mui/material";

const NewPasswordForm = () => {
    const [initialValues] = useState<ContraseniaInterface>({ newPassword: "", confirmPassword: "" });
    const [loading] = useState<boolean>(false)
    const router = useRouter()
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            enableReinitialize: true,
            validationSchema: validationSchemaPassword,
            initialValues,
            onSubmit: async (values, { resetForm }) => {
                console.log(values)
            }
        })
    return (
        <Box>
            <form onSubmit={handleSubmit} autoComplete="off">
                <h1 className="text-center text-indigo-400 mb-4">Nueva contraseña</h1>
                <div className="mb-2">
                    <TextField
                        fullWidth
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        label="Crear Contraseña"
                        value={values.newPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.newPassword && Boolean(errors.newPassword)}
                        helperText={touched.newPassword && errors.newPassword}
                        inputProps={{ maxLength: 15 }}
                        placeholder="ej: Password1- "
                    />
                </div>
                <div className="mb-2">
                    <TextField
                        fullWidth
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirmar Contraseña"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                        helperText={touched.confirmPassword && errors.confirmPassword}
                        inputProps={{ maxLength: 15 }}
                    />
                </div>
                <div className="text-center box mb-4" >
                    <LoadingButton
                        className="text-center"
                        size="small"
                        type="submit"
                        loading={loading}
                        variant="contained">
                        <span>Guardar</span>
                    </LoadingButton>
                </div>

            </form>
            <div className="text-center">
                <button type="button" className="text-center bg-transparent" onClick={() => router.push('/login')}>Regresar </button>
            </div>
        </Box>
    );
};
export default NewPasswordForm;