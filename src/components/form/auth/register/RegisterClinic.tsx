/* eslint-disable no-unused-vars */
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
  Typography,
  Button
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import Public from '../../../../assets/images/new_clinic.jpg'
import img from '@/assets/images/log1.png'
import { ClinicType } from '@/interfaces/auth/auth.interface'
import { useFormik } from 'formik'

import React, { useEffect, useState } from 'react'
const styling = {
  backgroundImage: `url(${img.src})`
}
const logoStyle = {
  borderRadius: '100%',
  width: '75%',
  aspectRatio: '16/16',
  objectFit: 'cover'
}
// // import { Visibility, VisibilityOff } from '@mui/icons-material'
// import { useFormik } from 'formik'
// import { SingUpInterface } from '@/interfaces/auth/auth.interface'
// import { validationSchemaSignUp } from '@/validations/Login/ValidationLogin'
// import { fetchingDataEncrypted } from '@/utils/utils'
// import Swal from 'sweetalert2'
// import { useRouter } from 'next/navigation'

const RegisterClinic = () => {
  const initialValues: ClinicType = {
    razonSocial: '',
    rfc: '',
    direccion: '',
    correoElectronico: '',
    password: '',
    logoSource: Public.src
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik<ClinicType>({
      enableReinitialize: true,
      initialValues,
      // validationSchema: validationSchemaSignUp,
      onSubmit: async (values, { resetForm }) => {
        console.log(values)
      }
    })

  const onImageChange = (e: Event) => {
    // formik.values.logoSource = e.target
    values.logoSource = String(e.target.files[0].name)
    console.log(e.target.files[0])
    console.log('Imagen seleccionada')
  }

  return (
    <>
      <div
        className='lg:w-1/2 hidden lg:flex items-center bg-login border'
        style={styling}>
        <Button component='label'>
          <input
            hidden
            accept='image/*'
            multiple
            type='file'
            onChange={onImageChange}
          />
          <Image src={values.logoSource} alt={Public} style={logoStyle} />
        </Button>
      </div>
      <div className='w-full lg:w-1/2 flex justify-center items-start lg:items-center p-4'>
        <Box className='w-full px-4'>
          <h2 className='text-black mb-6'>Registro de Clinica</h2>
          <form autoComplete='off'>
            <div className='mb-4'>
              <TextField
                fullWidth
                size='small'
                id='razon'
                name='razon'
                label='Razon Social *'
                placeholder='Clinica S.A. de C.V.'
              />
            </div>
            <div className='mb-4'>
              <TextField
                fullWidth
                size='small'
                id='rfc'
                name='rfc'
                label='RFC *'
                placeholder='CLNC123456XXX '
              />
            </div>
            <div className='mb-4'>
              <TextField
                fullWidth
                size='small'
                id='direccion'
                name='direccion'
                label='Dirección *'
                placeholder='Avenida Juárez 1000, Centro, Ciudad de México'
              />
            </div>
            <div className='mb-4'>
              <TextField
                fullWidth
                size='small'
                id='email'
                name='email'
                label='Dirección de Correo Electrónico *'
                placeholder='example@enterprise.com'
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
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        edge='end'></IconButton>
                    </InputAdornment>
                  }
                  label='Contraseña'
                />
                <FormHelperText></FormHelperText>
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
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        edge='end'></IconButton>
                    </InputAdornment>
                  }
                  label='Confirmar Contraseña'
                />
                <FormHelperText> </FormHelperText>
              </FormControl>
            </div>
            <FormControl>
              <FormControlLabel
                control={
                  <Checkbox size='small' id='terminos' name='terminos' />
                }
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
                control={
                  <Checkbox size='small' id='politicas' name='politicas' />
                }
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
              <LoadingButton fullWidth variant='contained' type='submit'>
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
      </div>
    </>
  )
}

export default RegisterClinic
