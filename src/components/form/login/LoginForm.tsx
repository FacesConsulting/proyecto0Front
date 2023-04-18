"use client";

import { LoginInterface } from "@/interfaces/auth/auth.interface";
import { Box, Divider, TextField } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import { validationSchemaUser } from "@/validations/Login/ValidationLogin";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";

const LoginForm = () => {
  const [initialValues] = useState<LoginInterface>({ email: "", password: "" });
  const [loading] = useState<boolean>(false)

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      validationSchema: validationSchemaUser,
      initialValues,

      onSubmit: async (values, { resetForm }) => {
        console.log(values);
      },
    });

  return (
    <Box className="w-full px-4">
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1 className="text-center text-sky-600 mb-4">Iniciar sesión</h1>
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
        <div className="mb-2">
          <TextField
            fullWidth
            type="password"
            id="password"
            name="password"
            label="Contraseña"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            inputProps={{ maxLength: 20 }}
          />
        </div>
        <div className="text-right mb-4">
          <Link
            href={"/forgot-password"}
            className="text-center text-xs text-slate-500"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <div className="text-center box mb-4">
          <LoadingButton
            className="text-center"
            size="small"
            type="submit"
            loading={loading}
            variant="contained"
          >
            <span>inicia sesión</span>
          </LoadingButton>
        </div>
        <Divider textAlign="center" className="text-slate-400 mb-4">
          Continua con
        </Divider>
        <div className="text-center mb-4 mr-2 ml-2">
          <button className="mr-2 text-lg bg-transparent" type="button">
            <i className="fab fa-google"></i>
          </button>
          <button className="ml-1 text-lg bg-transparent" type="button">
            {" "}
            <i className="fab fa-facebook"></i>
          </button>
        </div>
        <div className="text-center mb-3">
          <Link href={""} className="text-center text-sm text-slate-500">
            ¿Necesitas una cuenta? <span className="">Registrate</span>
          </Link>
        </div>
        <div className="text-center">
          <Link href={"/"} className="text-center text-s text-indigo-500" >Regresar</Link>
        </div>
      </form>

    </Box>
  );
};

export default LoginForm;
