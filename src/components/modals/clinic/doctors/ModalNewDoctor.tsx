import { Box, Divider, Modal, Typography } from '@mui/material'
import React from 'react'
import ModalContainer from '../../ModalContainer'
import NewDoctorForm from '@/components/form/clinic/doctor/NewDoctorForm'

export interface ModalProps {
  title: string
  open: boolean
  state: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalNewDoctor = ({ open, state, title }: ModalProps) => {
  return (
    <Modal
      open={open}
      onClose={() => state(false)}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
      <ModalContainer size='lg'>
        <Typography id='modal-modal-title' variant='h6' component='h2' mb={2}>
          {title}
        </Typography>
        <Divider/>
        <Box mt={2}>
            <NewDoctorForm />
        </Box>
      </ModalContainer>
    </Modal>
  )
}

export default ModalNewDoctor
