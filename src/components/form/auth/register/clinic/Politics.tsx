import { ClinicType } from '@/interfaces/auth/auth.interface'
import { Grid, TextField } from '@mui/material'
import { FormikProps } from 'formik'
import React from 'react'

interface GeneralDataProps {
  formikProps: FormikProps<ClinicType>
}
const Politics = ({ formikProps }: GeneralDataProps) => {
  return (
    <Grid container spacing={2} marginBottom={3}>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          id='codigoPostal'
          name='codigoPostal'
          label='Codigo Postal *'
          value={formikProps.values.codigo_postal}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          error={
            formikProps.touched.codigo_postal && Boolean(formikProps.errors.codigo_postal)
          }
          helperText={formikProps.touched.codigo_postal && formikProps.errors.codigo_postal}
          placeholder='john_doe@example.com'
        />
      </Grid>
    </Grid>
  )
}

export default Politics
