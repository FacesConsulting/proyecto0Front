import { ClinicType } from '@/interfaces/auth/auth.interface'
import { Grid, TextField } from '@mui/material'
import { FormikProps } from 'formik'
import React from 'react'

interface GeneralDataProps {
  formikProps: FormikProps<ClinicType>
}
const TechnicalData = ({ formikProps }: GeneralDataProps) => {
  return (
    <Grid container spacing={2} marginBottom={3}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id='razonSocial'
          name='razonSocial'
          label='Razon Social'
          value={formikProps.values.razonSocial}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          error={
            formikProps.touched.razonSocial && Boolean(formikProps.errors.razonSocial)
          }
          helperText={formikProps.touched.razonSocial && formikProps.errors.razonSocial}
          placeholder='john_doe@example.com'
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id='rfc'
          name='rfc'
          label='RFC'
          value={formikProps.values.rfc}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          error={
            formikProps.touched.rfc && Boolean(formikProps.errors.rfc)
          }
          helperText={
            formikProps.touched.rfc && formikProps.errors.rfc
          }
        />
      </Grid>
    </Grid>
  )
}

export default TechnicalData
