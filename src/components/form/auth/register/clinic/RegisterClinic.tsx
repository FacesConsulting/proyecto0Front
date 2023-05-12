/* eslint-disable no-unused-vars */
'use client'
import { ModalProps } from '@/interfaces/types/HelperTypes'
import React, { useState } from 'react'
import NewClinicForm from './NewClinicForm'
const RegisterClinic = ({ open, state, title }: ModalProps) => {
  return (
    <>
      <NewClinicForm state={state} />
    </>
  )
}

export default RegisterClinic
