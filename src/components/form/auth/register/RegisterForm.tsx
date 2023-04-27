'use client'

import { LoadingButton } from '@mui/lab'
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography
} from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useFormik } from 'formik'
import { SingUpInterface } from '@/interfaces/auth/auth.interface'
import { validationSchemaSignUp } from '@/validations/Login/ValidationLogin'
import { fetchingDataEncrypted } from '@/utils/utils'
import Swal from 'sweetalert2'

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const initialValues: SingUpInterface = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues,
      validationSchema: validationSchemaSignUp,
      onSubmit: async (values, { resetForm }) => {
        setLoading(true)
        const serializeData = JSON.stringify(values)
        try {
          const res = await fetchingDataEncrypted(
            serializeData,
            '/login/auth/signUp',
            'post'
          )

          if (res.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Hecho',
              text: 'Registro exitoso'
            })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Opsss',
              text: 'Registro exitoso'
            })
          }
        } catch (error) {
          console.log(error)
        }
        resetForm()
      }
    })

  return (
    <Box className='w-full px-4'>
      <h2 className='text-black mb-6'>Registro</h2>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <div className='flex gap-4 mb-4'>
          <TextField
            fullWidth
            id='firstname'
            name='firstname'
            label='Nombre(s) *'
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstname && Boolean(errors.firstname)}
            helperText={touched.firstname && errors.firstname}
            placeholder='John Doe'
          />
          <TextField
            fullWidth
            required
            size='small'
            id='lastname'
            name='lastname'
            label='Apellidos'
            value={user.lastname}
            onChange={(e) => setUser({ ...user, lastname: e.target.value })}
            placeholder='Lorem Ipsum'
          />
        </div>
        <div className='mb-4'>
          <TextField
            fullWidth
            size='small'
            id='email'
            name='email'
            label='Correo electrónico'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder='joe_doe@example.com'
          />
        </div>
        <div className='mb-4'>
          <FormControl variant='outlined' size='small' fullWidth>
            <InputLabel htmlFor='password'>Contraseña</InputLabel>
            <OutlinedInput
              fullWidth
              size='small'
              id='password'
              type={showPassword ? 'text' : 'password'}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    edge='end'>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
            />
          </FormControl>
        </div>
        <div className='mb-4'>
          <TextField
            required
            fullWidth
            size='small'
            type='password'
            id='password'
            name='password'
            label='Confirmar Contraseña'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <FormControl>
          <FormControlLabel
            control={<Checkbox size='small' />}
            label={
              <Typography fontSize={11}>
                Acepto &nbsp;
                <Link href={''} className='text-sky-700'>
                  Terminos y Servicios
                </Link>
              </Typography>
            }
          />

          <FormControlLabel
            control={<Checkbox size='small' />}
            label={
              <Typography fontSize={11}>
                Acepto &nbsp;
                <Link href={''} className='text-sky-700'>
                  Política de privacidad.
                </Link>
              </Typography>
            }
          />
        </FormControl>

        <div className='text-center box mb-4'>
          <LoadingButton
            fullWidth
            variant='contained'
            type='submit'
            loading={loading}>
            Registrate
          </LoadingButton>
        </div>
      </form>

      <div className='flex mb-4'>
        <Link
          href={'/auth/signIn'}
          className='text-center text-sm text-slate-500'>
          ¿Ya tienes una cuenta? &nbsp;
          <span className='text-sky-700 hover:underline decoration-1'>
            Inicia sesión
          </span>
        </Link>
      </div>
    </Box>
  )
}

export default RegisterForm
