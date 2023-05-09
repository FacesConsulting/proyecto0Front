'use client'

import { LoadingButton } from '@mui/lab'
import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField
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
  const [open, setOpen] = useState<boolean>(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const formikProps = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: validationSchemaSignUp,
    onSubmit: async (values, { resetForm }) => {
      console.log(values)
      setLoading(true)
      const serializeData = JSON.stringify(values)
      try {
        const res = await fetchingDataEncrypted(
          serializeData,
          '/login/auth/signUp',
          'post'
        )

        if (res.status !== 201) {
          throw new Error(res.data)
        }

        Swal.fire({
          icon: 'success',
          title: 'Hecho',
          text: res.data
        })
        router.push('/auth/signIn')

        resetForm()
      } catch (error : any) {
        Swal.fire({
          icon: 'error',
          title: 'Opsss.',
          text: error.message
        })
      }
      setLoading(false)
    }
  })

  return (
    <Box className='w-full px-4'>
      <h2 className='text-black mb-6'>Registro</h2>
      <form autoComplete='off' onSubmit={formikProps.handleSubmit}>
        <div className='flex gap-4 mb-4'>
          <TextField
            fullWidth
            size='small'
            id='nombre'
            name='nombre'
            label='Nombre(s) *'
            value={formikProps.values.nombre}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            error={
              formikProps.touched.nombre &&
              Boolean(formikProps.errors.nombre)
            }
            helperText={
              formikProps.touched.nombre && formikProps.errors.nombre
            }
            placeholder='John Doe'
          />
          <TextField
            fullWidth
            size='small'
            id='apellidos'
            name='apellidos'
            label='Apellidos *'
            value={formikProps.values.apellidos}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            error={
              formikProps.touched.apellidos &&
              Boolean(formikProps.errors.apellidos)
            }
            helperText={
              formikProps.touched.apellidos && formikProps.errors.apellidos
            }
            placeholder='Lorem Ipsum'
          />
        </div>
        <div className='mb-4'>
          <TextField
            fullWidth
            size='small'
            id='correoElectronico'
            name='correoElectronico'
            label='Correo Electrónico *'
            value={formikProps.values.correoElectronico}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            error={
              formikProps.touched.correoElectronico && Boolean(formikProps.errors.correoElectronico)
            }
            helperText={formikProps.touched.correoElectronico && formikProps.errors.correoElectronico}
            placeholder='JohnDoe@example.com'
          />
        </div>
        <div className='mb-4'>
          <FormControl variant='outlined' size='small' fullWidth>
            <InputLabel
              htmlFor='password'
              error={
                formikProps.touched.password &&
                Boolean(formikProps.errors.password)
              }>
              Contraseña
            </InputLabel>
            <OutlinedInput
              fullWidth
              size='small'
              id='password'
              name='password'
              value={formikProps.values.password}
              type={showPassword ? 'text' : 'password'}
              error={
                formikProps.touched.password &&
                Boolean(formikProps.errors.password)
              }
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
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
              {formikProps.touched.password && (
                <span style={{ color: '#d32f2f' }}>
                  {formikProps.errors.password}
                </span>
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
              value={formikProps.values.confirmPassword}
              type={showPassword ? 'text' : 'password'}
              error={
                formikProps.touched.confirmPassword &&
                Boolean(formikProps.errors.confirmPassword)
              }
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
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
              {formikProps.touched.confirmPassword && (
                <span style={{ color: '#d32f2f' }}>
                  {formikProps.errors.confirmPassword}
                </span>
              )}
            </FormHelperText>
          </FormControl>
        </div>

        <div className='text-center box mb-4'>
          <LoadingButton
            fullWidth
            disabled={open}
            variant='contained'
            type={
              !formikProps.values.politicas || !formikProps.values.terminos
                ? 'button'
                : 'submit'
            }
            loading={loading}
            onClick={() => {
              if (
                !formikProps.values.politicas ||
                !formikProps.values.terminos
              ) {
                setOpen(true)
              }
            }}>
            {!formikProps.values.politicas || !formikProps.values.terminos
              ? 'Continuar'
              : 'Registrarme'}
          </LoadingButton>
        </div>

        <ModalPrivacyPolicy
          open={open}
          state={setOpen}
          formikProps={formikProps}
        />
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
