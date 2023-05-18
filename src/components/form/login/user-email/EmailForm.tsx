'use client'

import { EmailInterface } from '@/interfaces/auth/auth.interface'
import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import { LoadingButton } from '@mui/lab'
import Link from 'next/link'
import { validationSchemaEmail } from '@/validations/Email/validationSchemaEmail'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import { api } from '@/api/axiosAPI'

const EmailForm = () => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const initialValues: EmailInterface = {
    correoElectronico: ''
  }

  const formikProp = useFormik({
    enableReinitialize: true,
    validationSchema: validationSchemaEmail,
    initialValues,

    onSubmit: async (values, { resetForm }) => {
      console.log(values)
      setLoading(true)
      const serializeData = JSON.stringify(values)
      try {
        const res = await api.post('/login/auth/forgotPassword', serializeData)
        console.log(res)

        Swal.fire({
          icon: 'success',
          title: 'Se le ha enviado un correo, por favor verifique',
          text: res.data
        })
        router.push('/')

        resetForm()
      } catch (error: any) {
        const { message } = error.response.data
        Swal.fire({
          icon: 'error',
          title: 'El correo proporcionado no está dado de alta',
          text: message
        })
      }
      setLoading(false)
    }
  })

  return (
    <Box className='w-full px-4'>
      <form autoComplete='off' onSubmit={formikProp.handleSubmit}>
        <h1 className='text-center text-sky-600 mb-4'>
          Restablecer contraseña
        </h1>
        <p className='text-center text-indigo-400 mb-4 text-xs'>
          Ingresa el correo electrónico asociado con tu cuenta{' '}
        </p>
        <div className='flex gap-4 mb-4'>
          <TextField
            fullWidth
            size='small'
            id='correoElectronico'
            name='correoElectronico'
            label='Correo electrónico'
            value={formikProp.values.correoElectronico}
            onChange={formikProp.handleChange}
            onBlur={formikProp.handleBlur}
            error={
              formikProp.touched.correoElectronico &&
              Boolean(formikProp.errors.correoElectronico)
            }
            helperText={
              formikProp.touched.correoElectronico &&
              formikProp.errors.correoElectronico
            }
            placeholder='joe_doe@example.com'
          />
        </div>
        <div className='text-center box mb-4'>
          <LoadingButton
            fullWidth
            variant='contained'
            loading={loading}
            type='submit'>
            Enviar
          </LoadingButton>
        </div>
      </form>
      <div className='text-center'>
        <Link
          href={'/auth/signIn'}
          className='text-center text-s text-indigo-500'>
          Regresar
        </Link>
      </div>
    </Box>
  )
}

export default EmailForm
