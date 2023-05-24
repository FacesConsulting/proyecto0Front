import { DoctorType } from '@/interfaces/clinic/doctor'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FormControl, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { FormikProps } from 'formik'
import React, { useState } from 'react'

interface GeneralDataProps {
  formikProps: FormikProps<DoctorType>
}
const GeneralData = ({ formikProps }: GeneralDataProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  return (
    <Grid container spacing={2} marginBottom={3}>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          id='nombre'
          name='nombre'
          label='Nombre(s)'
          value={formikProps.values.nombre}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          error={
            formikProps.touched.nombre && Boolean(formikProps.errors.nombre)
          }
          helperText={formikProps.touched.nombre && formikProps.errors.nombre}
          placeholder='John Doe'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          id='apellidos'
          name='apellidos'
          label='Apellidos'
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
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          id='curp'
          name='curp'
          label='Curp'
          value={formikProps.values.curp}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          error={formikProps.touched.curp && Boolean(formikProps.errors.curp)}
          helperText={formikProps.touched.curp && formikProps.errors.curp}
          placeholder='JOD'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DatePicker
          label='Fecha de Nacimiento'
          value={
            formikProps.values.fechaNacimiento !== null
              ? dayjs(formikProps.values.fechaNacimiento).format('DD/MM/YYYY')
              : null
          }
          onChange={(value) =>
            formikProps.setFieldValue('fechaNacimiento', value, true)
          }
          slotProps={{
            textField: {
              id: 'fechaNacimiento',
              name: 'fechaNacimiento',
              onBlur: formikProps.handleBlur,
              placeholder: '01/02/1980',
              helperText: `${
                formikProps.touched.fechaNacimiento &&
                formikProps.errors.fechaNacimiento
                  ? formikProps.errors.fechaNacimiento
                  : ''
              }`,
              fullWidth: true,
              error: Boolean(formikProps.errors.fechaNacimiento)
            }
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          id='telefono'
          name='telefono'
          label='Teléfono'
          value={formikProps.values.telefono}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          error={
            formikProps.touched.telefono && Boolean(formikProps.errors.telefono)
          }
          helperText={
            formikProps.touched.telefono && formikProps.errors.telefono
          }
          placeholder='12345678945'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          id='correoElectronico'
          name='correoElectronico'
          label='Correo Electrónico'
          value={formikProps.values.correoElectronico}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          error={
            formikProps.touched.correoElectronico && Boolean(formikProps.errors.correoElectronico)
          }
          helperText={formikProps.touched.correoElectronico && formikProps.errors.correoElectronico}
          placeholder='john_doe@example.com'
        />
      </Grid>
      <Grid item xs={12} md={6}>
      <FormControl variant='outlined' fullWidth>
            <InputLabel htmlFor='password'>Contraseña</InputLabel>
            <OutlinedInput
              fullWidth
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
      <Grid item xs={12} md={6}>
          <FormControl variant='outlined' fullWidth>
            <InputLabel htmlFor='confirmPassword'>
              Confirmar Contraseña
            </InputLabel>
            <OutlinedInput
              fullWidth
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
  )
}

export default GeneralData
