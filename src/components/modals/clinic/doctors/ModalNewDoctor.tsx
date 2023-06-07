import React from 'react'
import ModalContainer from '../../ModalContainer'
import NewDoctorForm from '@/components/form/clinic/doctor/NewDoctorForm'
import { ModalProps } from '@/interfaces/types/HelperTypes'

const ModalNewDoctor = ({ open, state, title }: ModalProps) => {
  return (
    <ModalContainer open={open} state={state} title={title} size='lg'>
      <NewDoctorForm state={state} />
    </ModalContainer>
  )
}

export default ModalNewDoctor
