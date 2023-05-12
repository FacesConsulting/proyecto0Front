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
  Typography
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import Public from '../../../../assets/images/new_clinic.jpg'
import { ClinicType } from '@/interfaces/auth/auth.interface'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'

const RegisterClinic = () => {
  const [file, setFile] = useState<File | null>(null)
  const [largeFile, setLargeFile] = useState<boolean>(false)
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

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = event.target as HTMLInputElement
    if (
      inputElement &&
      inputElement.files &&
      inputElement.files.length > 0 &&
      inputElement.files[0].size <= 500000
    ) {
      const file = inputElement.files[0]
      setFile(file)
      setLargeFile(false)
      return
    }
    setLargeFile(true)
  }

  return (
    <>
      <div className='lg:w-1/2 lg:flex flex-col items-center justify-center w-full p-4'>
        <div>
          <div className='mx-auto mb-4 flex justify-center items-center text-gray-400 border border-gray-200 border-dashed rounded-full cursor-pointer w-52 h-52'>
            <div className='flex relative flex-col gap-2 justify-center items-center text-gray-400 bg-gray-100 border border-gray-200 border-dashed rounded-full w-48 h-48 overflow-hidden'>
              <input
                type='file'
                name='archivo'
                id='archivo'
                accept='.jpge,.jpg'
                onChange={handleChangeFile}
                className='absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer'
              />
              {file !== null
                ? (
                <Image
                  className='absolute inset-0 z-0 object-cover w-full h-full border-4 border-white'
                  src={URL.createObjectURL(file || new Blob())}
                  alt={file.name}
                  fill
                />
                  )
                : (
                <>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='30'
                    height='30'
                    fill={'#9ca3af'}
                    viewBox='0 0 24 24'>
                    <path d='M5 4h-3v-1h3v1zm8 6c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11-5v17h-24v-17h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm13 4c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z' />
                  </svg>
                  <p>Subir logo</p>
                </>
                  )}
            </div>
          </div>
          <p className='mt-4 text-center text-gray-500 w-full text-sm'>
            Permitidos *.jpeg, *.jpg tamaño máximo de 500 KB
          </p>
          {largeFile && (
            <div
              role='alert'
              className='mt-4 mx-auto w-full lg:w-3/5'>
              <div className='bg-red-600 text-white font-bold rounded-t px-4 py-2 text-sm'>
                Archivo demasiado grande
              </div>
              <div className='border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700'>
                <p className='text-xs'>
                  El tamaño maximo permitido es de 500 KB. Si deseas puedes
                  reducir el peso de tu imagen en el siguiente{' '}
                  <a
                    href='https://tinypng.com/'
                    target='_blank'
                    className='text-red-800 font-semibold underline'>
                    enlace.
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
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
