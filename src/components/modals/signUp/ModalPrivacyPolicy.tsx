
import React from 'react'
import ModalContainer from '../ModalContainer'
import { ModalProps } from '@/interfaces/types/HelperTypes'

const ModalPrivacyPolicy = ({ open, state, title }: ModalProps) => {
  return (
    <ModalContainer size='xl' open={open} state={state} title={title}>
    </ModalContainer>
  )
}

export default ModalPrivacyPolicy
