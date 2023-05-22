'use client'

import { ResetPasswordInterface } from '@/interfaces/auth/auth.interface'
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { validationSchemaPassword } from '@/validations/Password/ValidationPassword'
import { LoadingButton } from '@mui/lab'
import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { fetchingDataEncrypted } from '@/utils/encryptData'
import Swal from 'sweetalert2'
import { Visibility, VisibilityOff } from '@mui/icons-material'
const NewPasswordForm = ({ id }: { id: string }) => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [initialValues, setInitialValues] = useState<ResetPasswordInterface>({
    id: '',
    password: '',
    confirmPassword: ''
  })

  useEffect(
    function () {
      if (id !== '') {
        setInitialValues({ ...initialValues, id })
      }
    },
    [id, initialValues]
  )

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const formikPropsP = useFormik({
    enableReinitialize: true,
    validationSchema: validationSchemaPassword,
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      console.log(values)
      setLoading(true)
      const serializeData = JSON.stringify(values)
      try {
        const res = await fetchingDataEncrypted(
          serializeData,
          '/login/auth/resetPassword',
          'post'
        )

        if (res.status !== 200) {
          throw new Error(res.data)
        }
        Swal.fire('Su contraseña ha sido actualizada exitosamente', res.data, 'success')
        router.push('/auth/signIn')
      } catch (error: any) {
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
    <Box>
      <form onSubmit={formikPropsP.handleSubmit} autoComplete='off'>
        <h1 className='text-center text-indigo-400 mb-2'>Nueva contraseña</h1>
        <p className='text-center text-indigo-400 mb-4 text-xs'>
          La contraseña necesita minimo 8 caracteres
        </p>
        <div className='mb-4'>
          <FormControl variant='outlined' size='small' fullWidth>
            <InputLabel
              htmlFor='password'
              error={
                formikPropsP.touched.password &&
                Boolean(formikPropsP.errors.password)
              }>
              Contraseña
            </InputLabel>
            <OutlinedInput
              fullWidth
              size='small'
              id='password'
              name='password'
              value={formikPropsP.values.password}
              type={showPassword ? 'text' : 'password'}
              error={
                formikPropsP.touched.password &&
                Boolean(formikPropsP.errors.password)
              }
              onChange={formikPropsP.handleChange}
              onBlur={formikPropsP.handleBlur}
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
              {formikPropsP.touched.password && (
                <span style={{ color: '#d32f2f' }}>
                  {formikPropsP.errors.password}
                </span>
              )}
            </FormHelperText>
          </FormControl>
        </div>
        <div className='mb-4 text-center '>
          <FormControl variant='outlined' size='small' fullWidth>
            <InputLabel htmlFor='confirmPassword'>
              Confirmar Contraseña
            </InputLabel>
            <OutlinedInput
              fullWidth
              size='small'
              id='confirmPassword'
              name='confirmPassword'
              value={formikPropsP.values.confirmPassword}
              type={showPassword ? 'text' : 'password'}
              error={
                formikPropsP.touched.confirmPassword &&
                Boolean(formikPropsP.errors.confirmPassword)
              }
              onChange={formikPropsP.handleChange}
              onBlur={formikPropsP.handleBlur}
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
              {formikPropsP.touched.confirmPassword && (
                <span style={{ color: '#d32f2f' }}>
                  {formikPropsP.errors.confirmPassword}
                </span>
              )}
            </FormHelperText>
          </FormControl>
        </div>
        <div className='text-center box mb-4'>
          <LoadingButton
            className='text-center'
            size='small'
            type='submit'
            loading={loading}
            variant='contained'>
            <span>Guardar</span>
          </LoadingButton>
        </div>
        <div className='text-center'>
          <Link href={'/login'} className='text-center text-s text-indigo-500'>
            Regresar
          </Link>
        </div>
      </form>
    </Box>
  )
}
export default NewPasswordForm
