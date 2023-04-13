"use client";

import { LoginInterface } from "@/interfaces/login/login.interface";
import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from 'formik'
import { validationSchemaUser } from "@/validations/Login/ValidationLogin";
import {LoadingButton} from '@mui/lab'
import { Save } from "@mui/icons-material";

const LoginForm = () => {
  const [initialValues, setUser] = useState<LoginInterface>({ user: "", password: "" });
  const [loading, setLoading] = useState<boolean>(false)

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      validationSchema: validationSchemaUser,
      initialValues,
      
      onSubmit: async (values, { resetForm }) => {
        console.log(values)
      }
    })

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <div>
        <TextField
              fullWidth
              id="user"
              name="user"
              label="Usuario"
              value={values.user}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.user && Boolean(errors.user)}
              helperText={touched.user && errors.user}
              inputProps={{ maxLength: 10 }}
              placeholder="Lorem "
            />
        </div>
        <LoadingButton
          size="small"
          color="primary"
          variant="contained"
          type="submit"
          loading={loading}
          loadingPosition="end"
          endIcon={<Save />}
        >
          Registrar Persona
        </LoadingButton>
      
      </form>
    </Box>
  );
};

export default LoginForm;
