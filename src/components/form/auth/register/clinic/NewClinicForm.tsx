/* eslint-disable no-unused-vars */
import { Box, Button, Grid, Step, StepLabel, Stepper } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/es'
import { LoadingButton } from '@mui/lab'
import Credentials from './Credentials'
import TechnicalData from './TechnicalData'
import Location from './Location'
import { Toaster } from 'react-hot-toast'
import { ClinicType } from '@/interfaces/auth/auth.interface'
import { validationSchemaNewClinic } from '@/validations/NewClinic/ValidationNewClinic'
import {
  fetchingDataEncrypted,
  preparedFormDataClinic
} from '@/utils/encryptData'
import BackImage from '../../../../../assets/images/new_clinic.jpg'
import Swal from 'sweetalert2'
import Politics from './Politics'
import { api } from '@/api/axiosAPI'
import UpdateLogo from './UpdateLogo'
import axios from 'axios'

const styling = {
  backgroundImage: `url(${BackImage.src})`,
  backgroundColor: 'red'
}

export interface NewClinicFormProps {
  state: React.Dispatch<React.SetStateAction<boolean>>
}

const NewClinicForm = () => {
  const [activeStep, setActiveStep] = useState<number>(0)

  const nextStep = () => {
    if (activeStep < 2) {
      setActiveStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1)
    }
  }

  const initialValues: ClinicType = {
    razonSocial: 'Empresa S.A de C.V',
    rfc: 'EMLDIDK1234',
    correoElectronico: 'diablerojf@gmail.com',
    password: 'Jay29092001.',
    confirmPassword: 'Jay29092001.',
    logoSource: null,
    terminos: false,
    politicas: false,
    codigoPostal: '54680',
    estado: 'México',
    municipio: 'Huehuetoca',
    colonia: 'Salitrillo',
    calle: 'Av. Lorem',
    numeroExterior: '35',
    numeroInterior: '4-A',
    telefono: '5500112233',
    plataforma: 'web'
  }

  const formik = useFormik<ClinicType>({
    isInitialValid: false,
    enableReinitialize: true,
    initialValues,
    // validationSchema: validationSchemaNewClinic,
    onSubmit: async (values, { resetForm }) => {
      const formData = preparedFormDataClinic(values)
      try {
        const res = await axios.post(
          'http://localhost:8081/clinica/clinica/register',
          formData
        )

        if (res.status !== 201) {
          throw new Error(res.data)
        }

        Swal.fire({
          icon: 'success',
          title: 'Hecho',
          text: res.data
        })
      } catch (error: any) {
        const { severity, title, message } = error.response.data
        Swal.fire({
          icon: severity.toLowerCase(),
          title,
          text: message
        })
      }
    }
  })

  const steeps: Array<string> = [
    'Credenciales',
    'Datos de la Empresa',
    'Ubicacion de la Empresa'
  ]

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'es'}>
      <Toaster position='top-right' reverseOrder={false} />
      <form
        autoComplete='off'
        onSubmit={formik.handleSubmit}
        encType='multipart/form-data'>
        <Box my={3}>
          <Stepper alternativeLabel activeStep={activeStep}>
            {steeps.map((s) => (
              <Step key={s}>
                <StepLabel>{s}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Grid container gap={2}>
          <Grid item xs={12} md={4}>
            <UpdateLogo formikProps={formik} />
          </Grid>
          <Grid item xs={12} md={7}>
            {activeStep === 0 && <Credentials formikProps={formik} />}
            {activeStep === 1 && <TechnicalData formikProps={formik} />}
            {activeStep === 2 && <Location formikProps={formik} />}
          </Grid>
        </Grid>

        <Box
          sx={{
            display: 'flex',
            justifyContent: `${
              activeStep === 0 ? 'flex-end' : 'space-between'
            }`,
            alignItems: 'center',
            gap: 2
          }}>
          {activeStep > 0 && <Button onClick={prevStep}>Anterior</Button>}
          {activeStep < 2 && (
            <Button
              disabled={false}
              type={'button'}
              color={'primary'}
              onClick={nextStep}>
              Siguiente
            </Button>
          )}
          {activeStep === 2 && (
            <LoadingButton
              disabled={false}
              type={'submit'}
              color={'success'}
              loading={false}>
              Guardar
            </LoadingButton>
          )}
        </Box>
      </form>
    </LocalizationProvider>
  )
}

export default NewClinicForm
