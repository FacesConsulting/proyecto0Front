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

export interface NewDoctorFormProps {
  state: React.Dispatch<React.SetStateAction<boolean>>
}

const NewDoctorForm = ({ state }: NewDoctorFormProps) => {
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

  const initialValues: DoctorType = {
    curp: '',
    nombres: '',
    apellidos: '',
    telefono: '',
    correo: '',
    fecha_nacimiento: null,
    password: '',
    // Direccion
    codigo_postal: '',
    estado: '',
    municipio: '',
    colonia: '',
    calle: '',
    numero_exterior: '',
    numero_interior: '',
    // Preperacion academica
    cedula_profesional: '',
    especialidad: [
      { especialidad: '', archivo: null, nombreArchivo: '', sizeArchivo: 0 },
      { especialidad: '', archivo: null, nombreArchivo: '', sizeArchivo: 0 },
      { especialidad: '', archivo: null, nombreArchivo: '', sizeArchivo: 0 }
    ],
    tipo_registro: 'Medico',
    titulo: ''
  }

  const formik = useFormik<DoctorType>({
    enableReinitialize: true,
    initialValues,
    // validationSchema: validationSchemaSignUp,
    onSubmit: async (values, { resetForm }) => {
      console.log(values)
    }
  })

  const steeps: Array<string> = [
    'Datos generales',
    'Domicilio',
    'Información Profesional'
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

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 2
          }}>
          {activeStep > 0 && <Button onClick={prevStep}>Anterior</Button>}
          <LoadingButton
            type={activeStep === 2 ? 'submit' : 'button'}
            onClick={nextStep}>
            {activeStep === 2 ? 'Guardar' : 'Siguiente'}
          </LoadingButton>
        </Box>
      </form>
    </LocalizationProvider>
  )
}

export default NewDoctorForm
