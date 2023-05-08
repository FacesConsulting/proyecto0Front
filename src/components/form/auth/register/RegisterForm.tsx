'use client'

import { LoadingButton } from '@mui/lab'
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
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
import ModalPrivacyPolicy from '@/components/modals/signUp/ModalPrivacyPolicy'
import { useRouter } from 'next/navigation'

const RegisterForm = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const initialValues: SingUpInterface = {
    nombre: '',
    apellidos: '',
    correoElectronico: '',
    password: '',
    confirmPassword: '',
    terminos: false,
    politicas: false
  }
  const [politicas, setPoliticas] = useState<boolean>(false)

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

          if (res.status !== 201) {
            Swal.fire({
              icon: 'error',
              title: 'Oopss',
              text: res.data
            })
            return
          }

          Swal.fire({
            icon: 'success',
            title: 'Hecho',
            text: res.data
          })
          router.push('/auth/signIn')
        } catch (error: any) {
          Swal.fire({
            icon: 'error',
            title: 'Error Catastrofico',
            text: error.message
          })
        }
        resetForm()
        setLoading(false)
      }
    })

  return (
    <Box className='w-full px-4'>
      <h2 className='text-black mb-6'>Registro</h2>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <div className='flex gap-4 mb-4'>
          <TextField
            fullWidth
            size='small'
            id='nombre'
            name='nombre'
            label='Nombre(s) *'
            value={values.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.nombre && Boolean(errors.nombre)}
            helperText={touched.nombre && errors.nombre}
            placeholder='John Doe'
          />
          <TextField
            fullWidth
            size='small'
            id='apellidos'
            name='apellidos'
            label='Apellidos *'
            value={values.apellidos}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.apellidos && Boolean(errors.apellidos)}
            helperText={touched.apellidos && errors.apellidos}
            placeholder='Doe'
          />
        </div>
        <div className='mb-4'>
          <TextField
            fullWidth
            size='small'
            id='correoElectronico'
            name='correoElectronico'
            label='Correo Electrónico *'
            value={values.correoElectronico}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.correoElectronico && Boolean(errors.correoElectronico)
            }
            helperText={touched.correoElectronico && errors.correoElectronico}
            placeholder='example@mail.com'
          />
        </div>
        <div className='mb-4'>
          <FormControl variant='outlined' size='small' fullWidth>
            <InputLabel htmlFor='password'>Contraseña</InputLabel>
            <OutlinedInput
              fullWidth
              size='small'
              id='password'
              name='password'
              value={values.password}
              type={showPassword ? 'text' : 'password'}
              error={touched.password && Boolean(errors.password)}
              onChange={handleChange}
              onBlur={handleBlur}
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
              label='Contraseña'
            />
            <FormHelperText>
              {touched.password && (
                <span style={{ color: '#d32f2f' }}>{errors.password}</span>
              )}
            </FormHelperText>
          </FormControl>
        </div>
        <div className='mb-4'>
          <FormControl variant='outlined' size='small' fullWidth>
            <InputLabel htmlFor='confirmPassword'>
              Confirmar Contraseña
            </InputLabel>
            <OutlinedInput
              fullWidth
              size='small'
              id='confirmPassword'
              name='confirmPassword'
              value={values.confirmPassword}
              type={showPassword ? 'text' : 'password'}
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}
              onChange={handleChange}
              onBlur={handleBlur}
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
              label='Confirmar Contraseña'
            />
            <FormHelperText>
              {touched.confirmPassword && (
                <span style={{ color: '#d32f2f' }}>
                  {errors.confirmPassword}
                </span>
              )}
            </FormHelperText>
          </FormControl>
        </div>
        <FormControl>
          <FormControlLabel
            control={
              <Checkbox
                size='small'
                id='terminos'
                name='terminos'
                checked={values.terminos}
                value={values.terminos}
                onClick={handleChange}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            }
            label={
              <Typography fontSize={11}>
                Acepto &nbsp;
                <Link href={''} className='text-sky-700'>
                  Terminos y Servicios
                </Link>
                {errors.terminos && (
                  <span style={{ color: '#d32f2f' }}>
                    <br />
                    {errors.terminos}
                  </span>
                )}
              </Typography>
            }
          />

          <FormControlLabel
            control={
              <Checkbox
                size='small'
                id='politicas'
                name='politicas'
                checked={values.politicas}
                value={values.politicas}
                onClick={handleChange}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            }
            label={
              <Typography fontSize={11}>
                Acepto &nbsp;
                <Link href={''} className='text-sky-700'>
                  Política de privacidad.
                </Link>
                {errors.politicas && (
                  <span style={{ color: '#d32f2f' }}>
                    <br />
                    {errors.politicas}
                  </span>
                )}
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
      <ModalPrivacyPolicy
        open={politicas}
        state={setPoliticas}
        title='Politicas de privacidad'
      />
    </Box>
  )
}

export default RegisterForm
