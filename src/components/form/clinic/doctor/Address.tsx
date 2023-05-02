import { api } from '@/api/axiosAPI'
import { DoctorType } from '@/interfaces/clinic/doctor'
import { InfoAddress } from '@/interfaces/types/HelperTypes'
import { Grid, MenuItem, TextField } from '@mui/material'
import { FormikProps } from 'formik'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
interface AddressProps {
  formikProps: FormikProps<DoctorType>
}
const Address = ({ formikProps }: AddressProps) => {
  const [disableFields, setDisableField] = useState<boolean>(true)
  const [colonias, setColonias] = useState<Array<string>>([])

  const clearAddress = () => {
    formikProps.setFieldValue('estado', '', true)
    formikProps.setFieldValue('municipio', '', true)
    setColonias([])
    setDisableField(true)
  }

  const getZipData = async () => {
    setDisableField(false)
    try {
      const res = await api.get(
        `api/codigoPostal/mx/${formikProps.values.codigo_postal}`
      )
      const { colonias, estado, municipio } : InfoAddress = res.data
      formikProps.setFieldValue('estado', estado, true)
      formikProps.setFieldValue('municipio', municipio, true)
      setColonias(colonias)
    } catch (error) {
      toast.error('No pudimos encontrar tu código postal')
      clearAddress()
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
              } else {
                clearAddress()
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
            placeholder='54123'
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} marginBottom={2}>
        <Grid item xs={4}>
          <TextField
            fullWidth
            disabled
            id='estado'
            name='estado'
            label='Estado '
            value={formikProps.values.estado}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            error={
              formikProps.touched.estado && Boolean(formikProps.errors.estado)
            }
            helperText={formikProps.touched.estado && formikProps.errors.estado}
            placeholder='México'
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            disabled
            id='municipio'
            name='municipio'
            label='Municipio/ Alcaldía '
            value={formikProps.values.municipio}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            error={
              formikProps.touched.municipio &&
              Boolean(formikProps.errors.municipio)
            }
            helperText={
              formikProps.touched.municipio && formikProps.errors.municipio
            }
            placeholder='Naucalpan'
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            disabled={disableFields}
            select
            id='colonia'
            name='colonia'
            label='Colonia '
            value={formikProps.values.colonia}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            error={
              formikProps.touched.colonia && Boolean(formikProps.errors.colonia)
            }
            helperText={
              formikProps.touched.colonia && formikProps.errors.colonia
            }
            placeholder='Santa Fe'>
            {colonias?.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Grid container spacing={2} marginBottom={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            disabled={disableFields}
            id='calle'
            name='calle'
            label='Calle '
            value={formikProps.values.calle}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            error={
              formikProps.touched.calle && Boolean(formikProps.errors.calle)
            }
            helperText={formikProps.touched.calle && formikProps.errors.calle}
            placeholder='Av. Lorem Ipsum'
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            disabled={disableFields}
            id='numero_exterior'
            name='numero_exterior'
            label='Número exterior '
            value={formikProps.values.numero_exterior}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            error={
              formikProps.touched.numero_exterior &&
              Boolean(formikProps.errors.numero_exterior)
            }
            helperText={
              formikProps.touched.numero_exterior &&
              formikProps.errors.numero_exterior
            }
            placeholder='5'
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            disabled={disableFields}
            id='numero_interior'
            name='numero_interior'
            label='Nº interior/Depto (opcional) '
            value={formikProps.values.numero_interior}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            error={
              formikProps.touched.numero_interior &&
              Boolean(formikProps.errors.numero_interior)
            }
            helperText={
              formikProps.touched.numero_interior &&
              formikProps.errors.numero_interior
            }
            placeholder='6'
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Address
