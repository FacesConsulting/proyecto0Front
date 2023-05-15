'use client'
import { Divider } from '@mui/material'
import NewClinicForm from './NewClinicForm'

const RegisterClinic = () => {
  return (
    <>
      <h2 className='mb-4'>Registro de clinica</h2>
      <Divider/>
      <NewClinicForm />
    </>
  )
}

export default RegisterClinic
