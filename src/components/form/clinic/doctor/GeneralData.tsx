import { DoctorType } from '@/interfaces/clinic/doctor'
import { Grid, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { FormikProps } from 'formik'
import React from 'react'

interface GeneralDataProps {
  formikProps: FormikProps<DoctorType>
}
const GeneralData = ({ formikProps }: GeneralDataProps) => {
  return (
    <Grid container spacing={2} marginBottom={3}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id='curp'
          name='curp'
          label='CURP *'
          value={formikProps.values.curp}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          error={formikProps.touched.curp && Boolean(formikProps.errors.curp)}
          helperText={formikProps.touched.curp && formikProps.errors.curp}
          placeholder='JOD'
        /> 
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          id='nombres'
          name='nombres'
          label='Nombre(s) *'
          value={formikProps.values.nombres}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          error={
            formikProps.touched.nombres && Boolean(formikProps.errors.nombres)
          }
          helperText={formikProps.touched.nombres && formikProps.errors.nombres}
          placeholder='John Doe'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
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
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          id='telefono'
          name='telefono'
          label='Telefóno *'
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
        <DatePicker
          label='Fecha de Nacimiento *'
          value={
            formikProps.values.fecha_nacimiento !== null
              ? dayjs(formikProps.values.fecha_nacimiento)
              : null
          }
          onChange={(value) =>
            formikProps.setFieldValue('fecha_nacimiento', value, true)
          }
          slotProps={{
            textField: {
              id: 'fecha_nacimiento',
              name: 'fecha_nacimiento',
              onBlur: formikProps.handleBlur,
              placeholder: '01/02/1980',
              helperText: `${
                formikProps.touched.fecha_nacimiento &&
                formikProps.errors.fecha_nacimiento
                  ? formikProps.errors.fecha_nacimiento
                  : ''
              }`,
              fullWidth: true,
              error: Boolean(formikProps.errors.fecha_nacimiento)
            }
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          id='correo'
          name='correo'
          label='Correo Electrónico *'
          value={formikProps.values.correo}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          error={
            formikProps.touched.correo && Boolean(formikProps.errors.correo)
          }
          helperText={formikProps.touched.correo && formikProps.errors.correo}
          placeholder='john_doe@example.com'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          id='password'
          name='password'
          label='Contraseña *'
          value={formikProps.values.password}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          error={
            formikProps.touched.password && Boolean(formikProps.errors.password)
          }
          helperText={
            formikProps.touched.password && formikProps.errors.password
          }
        />
      </Grid>
    </Grid>
  )
}

export default GeneralData
