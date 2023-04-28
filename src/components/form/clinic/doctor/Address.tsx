import { DoctorType } from '@/interfaces/clinic/doctor'
import { Grid, TextField } from '@mui/material'
import { FormikProps } from 'formik'
import React, { useState } from 'react'
interface AddressProps {
  formikProps: FormikProps<DoctorType>
}
const Address = ({ formikProps }: AddressProps) => {
  const [disableFields, setDisableField] = useState<boolean>()

  const getZipData = async () => {
    console.log('Generando peticion')
    try {
      const res = await fetch(
        `http://api.zippopotam.us/mx/${formikProps.values.codigo_postal}`
      )
      console.log(res.json())
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Grid container spacing={2} marginBottom={2}>
        <Grid item xs={4}>
          <TextField
            fullWidth
            id='codigo_postal'
            name='codigo_postal'
            label='Código Postal '
            value={formikProps.values.codigo_postal}
            onChange={formikProps.handleChange}
            onBlur={(e) => {
              formikProps.handleBlur(e)
              if (formikProps.values.codigo_postal.length === 5) {
                getZipData()
              }
            }}
            error={
              formikProps.touched.codigo_postal &&
              Boolean(formikProps.errors.codigo_postal)
            }
            helperText={
              formikProps.touched.codigo_postal &&
              formikProps.errors.codigo_postal
            }
            placeholder='Av. Lorem Ipsum'
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} marginBottom={2}>
        <Grid item xs={4}>
          <TextField
            fullWidth
            id='direccion'
            name='direccion'
            label='Estado '
            value={formikProps.values.direccion}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            error={
              formikProps.touched.direccion &&
              Boolean(formikProps.errors.direccion)
            }
            helperText={
              formikProps.touched.direccion && formikProps.errors.direccion
            }
            placeholder='Av. Lorem Ipsum'
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            id='direccion'
            name='direccion'
            label='Municipio/ Alcaldía '
            value={formikProps.values.direccion}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            error={
              formikProps.touched.direccion &&
              Boolean(formikProps.errors.direccion)
            }
            helperText={
              formikProps.touched.direccion && formikProps.errors.direccion
            }
            placeholder='Av. Lorem Ipsum'
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            id='direccion'
            name='direccion'
            label='Colonia '
            value={formikProps.values.direccion}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            error={
              formikProps.touched.direccion &&
              Boolean(formikProps.errors.direccion)
            }
            helperText={
              formikProps.touched.direccion && formikProps.errors.direccion
            }
            placeholder='Av. Lorem Ipsum'
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} marginBottom={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id='direccion'
            name='direccion'
            label='Calle '
            value={formikProps.values.direccion}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            error={
              formikProps.touched.direccion &&
              Boolean(formikProps.errors.direccion)
            }
            helperText={
              formikProps.touched.direccion && formikProps.errors.direccion
            }
            placeholder='Av. Lorem Ipsum'
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id='direccion'
            name='direccion'
            label='Número exterior '
            value={formikProps.values.direccion}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            error={
              formikProps.touched.direccion &&
              Boolean(formikProps.errors.direccion)
            }
            helperText={
              formikProps.touched.direccion && formikProps.errors.direccion
            }
            placeholder='Av. Lorem Ipsum'
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id='direccion'
            name='direccion'
            label='Nº interior/Depto (opcional) '
            value={formikProps.values.direccion}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            error={
              formikProps.touched.direccion &&
              Boolean(formikProps.errors.direccion)
            }
            helperText={
              formikProps.touched.direccion && formikProps.errors.direccion
            }
            placeholder='Av. Lorem Ipsum'
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Address
