import { api } from '@/api/axiosAPI'
import { ClinicType } from '@/interfaces/auth/auth.interface'
import { InfoAddress } from '@/interfaces/types/HelperTypes'
import { LocationOff, LocationOn } from '@mui/icons-material'
import {
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  Tooltip
} from '@mui/material'
import { FormikProps } from 'formik'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

interface GeneralDataProps {
  formikProps: FormikProps<ClinicType>
}
const Location = ({ formikProps }: GeneralDataProps) => {
  const [disableFields, setDisableField] = useState<boolean>(true)
  const [colonias, setColonias] = useState<Array<string>>([])
  const [manual, setManual] = useState<boolean>(false)
  const clearAddress = () => {
    formikProps.setFieldValue('estado', '', true)
    formikProps.setFieldValue('municipio', '', true)
    setColonias([])
    setDisableField(true)
  }

  const getZipData = async () => {
    setDisableField(false)
    try {
      const res = await toast.promise(
        api.get('api/codigoPostal/mx/' + formikProps.values.codigoPostal),
        {
          loading: 'Buscando ...',
          success: 'Código postal encontrado',
          error: 'Lo sentimos no pudimos encontrar tu código postal, ingrésalo nuevamente o cambia a modo manual.'
        }
      )

      const { colonias, estado, municipio }: InfoAddress = res.data
      formikProps.setFieldValue('estado', estado, true)
      formikProps.setFieldValue('municipio', municipio, true)
      setColonias(colonias)
    } catch (error) {
      clearAddress()
    }
  }

  return (
    <>
      <Grid container spacing={2} marginBottom={2}>
        <Grid item xs={12}>
          <FormControl fullWidth variant='outlined'>
            <InputLabel htmlFor='codigoPostal'>Código Postal</InputLabel>
            <OutlinedInput
              fullWidth
              id='codigoPostal'
              name='codigoPostal'
              type={'text'}
              value={formikProps.values.codigoPostal}
              onChange={formikProps.handleChange}
              onBlur={(e) => {
                formikProps.handleBlur(e)
                if (formikProps.values.codigoPostal.length === 5 && !manual) {
                  getZipData()
                }
              }}
              placeholder='54123'
              inputProps={{
                inputMode: 'numeric',
                pattern: '[0-9]*',
                maxLength: 5
              }}
              error={
                formikProps.touched.codigoPostal &&
                Boolean(formikProps.errors.codigoPostal)
              }
              endAdornment={
                <InputAdornment position='end'>
                  <Tooltip title={manual ? 'Búsqueda manual' : 'Búsqueda automática'}>
                    <IconButton
                      aria-label='toggle mode visibility'
                      edge='end'
                      onClick={() => setManual(!manual)}>
                      {manual ? <LocationOff /> : <LocationOn />}
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              }
              label='Código Postal'
            />
          </FormControl>
          <FormHelperText>
              {formikProps.touched.codigoPostal && (
                <span style={{ color: '#d32f2f' }}>
                  {formikProps.errors.codigoPostal}
                </span>
              )}
            </FormHelperText>
        </Grid>
      </Grid>
      <Grid container spacing={2} marginBottom={2}>
        <Grid item xs={6} md={4}>
          <TextField
            fullWidth
            disabled={!manual}
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
        <Grid item xs={6} md={4}>
          <TextField
            fullWidth
            disabled={!manual}
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
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            disabled={!manual && disableFields}
            select={!manual}
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
            disabled={!manual && disableFields}
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
            disabled={!manual && disableFields}
            id='numeroExterior'
            name='numeroExterior'
            label='Número exterior '
            value={formikProps.values.numeroExterior}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            error={
              formikProps.touched.numeroExterior &&
              Boolean(formikProps.errors.numeroExterior)
            }
            helperText={
              formikProps.touched.numeroExterior &&
              formikProps.errors.numeroExterior
            }
            placeholder='5'
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            disabled={!manual && disableFields}
            id='numeroInterior'
            name='numeroInterior'
            label='Nº interior/Depto (opcional) '
            value={formikProps.values.numeroInterior}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            error={
              formikProps.touched.numeroInterior &&
              Boolean(formikProps.errors.numeroInterior)
            }
            helperText={
              formikProps.touched.numeroInterior &&
              formikProps.errors.numeroInterior
            }
            placeholder='6'
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Location
