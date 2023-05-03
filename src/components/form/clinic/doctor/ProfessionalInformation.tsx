import DynamicInput from '@/components/helpers/DynamicInput'
import { DoctorType } from '@/interfaces/clinic/doctor'
import { Grid, TextField } from '@mui/material'
import { FormikProps } from 'formik'
import React from 'react'

interface ProfessionalInformationProps {
  formikProps: FormikProps<DoctorType>
}
const ProfessionalInformation = ({
  formikProps
}: ProfessionalInformationProps) => {
  return (
    <Grid container spacing={2} marginBottom={3}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id='cedula_profesional'
          name='cedula_profesional'
          label='Cédula profesional *'
          value={formikProps.values.cedula_profesional}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          error={
            formikProps.touched.cedula_profesional &&
            Boolean(formikProps.errors.cedula_profesional)
          }
          helperText={
            formikProps.touched.cedula_profesional &&
            formikProps.errors.cedula_profesional
          }
          placeholder='123456789'
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id='titulo'
          name='titulo'
          label='Título *'
          value={formikProps.values.titulo}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          error={
            formikProps.touched.titulo && Boolean(formikProps.errors.titulo)
          }
          helperText={formikProps.touched.titulo && formikProps.errors.titulo}
          placeholder='Licenciado en Medicina'
        />
      </Grid>
      <Grid item xs={12}>
        <DynamicInput />
        {/* <TextField
          fullWidth
          id='especialidad'
          name='especialidad'
          label='Especialidad '
          value={formikProps.values.especialidad}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          error={
            formikProps.touched.especialidad &&
            Boolean(formikProps.errors.especialidad)
          }
          helperText={
            formikProps.touched.especialidad &&
            formikProps.errors.especialidad
          }
          placeholder='Cardiología Clínica'
        /> */}
      </Grid>
    </Grid>
  )
}

export default ProfessionalInformation
