import { DoctorType } from '@/interfaces/clinic/doctor'
import { Box, Button, Step, StepLabel, Stepper } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/es'
import { LoadingButton } from '@mui/lab'
import GeneralData from './GeneralData'
import ProfessionalInformation from './ProfessionalInformation'
import Address from './Address'
import { Toaster } from 'react-hot-toast'
import { preparedFormDataDoctor } from '../../../../utils/encryptData'
import Swal from 'sweetalert2'
import axios from 'axios'
import { validationSchemaNewDoctor } from '@/validations/NewDoctor/ValidationNewDoctor'
import Speciality from './Speciality'

export interface NewDoctorFormProps {
  state: React.Dispatch<React.SetStateAction<boolean>>
}

const NewDoctorForm = ({ state }: NewDoctorFormProps) => {
  const [activeStep, setActiveStep] = useState<number>(0)

  const nextStep = () => {
    if (activeStep < 3) {
      setActiveStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1)
    }
  }

  const initialValues: DoctorType = {
    curp: '',
    nombre: '',
    apellidos: '',
    telefono: '',
    correoElectronico: '',
    fechaNacimiento: null,
    password: '',
    confirmPassword: '',
    // Direccion
    codigoPostal: '',
    estado: '',
    municipio: '',
    colonia: '',
    calle: '',
    numeroExterior: '',
    numeroInterior: '',
    terminos: true,
    politicas: true,
    // Preperacion academica
    cedulaProfesional: null,
    especialidad: [
      { nombreEspecialidad: '', documentoEspecialidad: null },
      { nombreEspecialidad: '', documentoEspecialidad: null },
      { nombreEspecialidad: '', documentoEspecialidad: null }
    ],
    rol: 'Medico',
    titulo: null,
    firma: null
  }

  const formik = useFormik<DoctorType>({
    isInitialValid: false,
    enableReinitialize: true,
    //validationSchema: validationSchemaNewDoctor,
    initialValues,

    onSubmit: async (values, { resetForm }) => {
      console.log(values)
      const formData = preparedFormDataDoctor(values)
      console.log(formData)
      try {
        const res = await axios.post(
          'http://localhost:8081/medico/medic/register',
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
        resetForm()
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
    'Datos generales',
    'Domicilio',
    'Información Profesional',
    'Especialidades'
  ]

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'es'}>
      <Toaster position='top-right' reverseOrder={false} />
      <form autoComplete='off' onSubmit={formik.handleSubmit}>
        <Box my={3}>
          <Stepper alternativeLabel activeStep={activeStep}>
            {steeps.map((s) => (
              <Step key={s}>
                <StepLabel>{s}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        {activeStep === 0 && <GeneralData formikProps={formik} />}
        {activeStep === 1 && <Address formikProps={formik} />}
        {activeStep === 2 && <ProfessionalInformation formikProps={formik} />}
        {activeStep === 3 && <Speciality formikProps={formik} />}
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
          {activeStep < 3 && (
            <Button
              disabled={false}
              type={'button'}
              color={'primary'}
              onClick={nextStep}>
              Siguiente
            </Button>
          )}
          {activeStep === 3 && (
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

export default NewDoctorForm
