import { DoctorType } from '@/interfaces/clinic/doctor'
import { Box, Button, Step, StepLabel, Stepper } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/es'
import { LoadingButton } from '@mui/lab'
import GeneralData from './GeneralData'
import ProfessionalInformation from './ProfessionalInformation'
import Address from './Address'

export interface NewDoctorFormProps {
  state: React.Dispatch<React.SetStateAction<boolean>>
}

const NewDoctorForm = ({ state }: NewDoctorFormProps) => {
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
    direccion: '',
    // Preperacion academica
    cedula_profesional: '',
    especialidad: '',
    tipo_registro: 'Medico',
    titulo: ''
  }

  const formik = useFormik<DoctorType>({
    enableReinitialize: true,
    initialValues,
    // validationSchema: validationSchemaSignUp,
    onSubmit: async (values, { resetForm }) => {}
  })

  const steeps: Array<string> = ['Datos generales', 'Domicilio', 'Información Profesional']

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'es'}>
      <form autoComplete='off' onSubmit={formik.handleSubmit}>
        <Box my={3}>
          <Stepper alternativeLabel>
            {steeps.map((s) => (
              <Step key={s}>
                <StepLabel>{s}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <GeneralData formikProps={formik} />
        <Address formikProps={formik} />
        <ProfessionalInformation formikProps={formik} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 2
          }}>
          <Button color='error' onClick={() => state(false)}>
            Cancelar
          </Button>
          <LoadingButton>Guardar</LoadingButton>
        </Box>
      </form>
    </LocalizationProvider>
  )
}

export default NewDoctorForm
