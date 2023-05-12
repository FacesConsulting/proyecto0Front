import { ClinicType } from '@/interfaces/auth/auth.interface'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import {
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField
} from '@mui/material'
import { FormikProps } from 'formik'
import React, { useState } from 'react'

interface GeneralDataProps {
  formikProps: FormikProps<ClinicType>
}
const Credentials = ({ formikProps }: GeneralDataProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  return (
    <>
      <Grid container spacing={2} marginBottom={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id='correoElectronico'
            name='correoElectronico'
            label='Correo Electrónico *'
            value={formikProps.values.correoElectronico}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            error={
              formikProps.touched.correoElectronico &&
              Boolean(formikProps.errors.correoElectronico)
            }
            helperText={
              formikProps.touched.correoElectronico &&
              formikProps.errors.correoElectronico
            }
            placeholder='john_doe@example.com'
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl variant='outlined' size='small' fullWidth>
            <InputLabel htmlFor='password'>Contraseña</InputLabel>
            <OutlinedInput
              fullWidth
              size='small'
              id='password'
              name='password'
              value={formikProps.values.password}
              type={showPassword ? 'text' : 'password'}
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
              onInput={formikProps.handleChange}
              error={
                formikProps.touched.password &&
                Boolean(formikProps.errors.password)
              }
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
        </Grid>
        <Grid item xs={12}>
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
              onInput={formikProps.handleChange}
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
        </Grid>
      </Grid>
    </>
  )
}

export default Credentials
