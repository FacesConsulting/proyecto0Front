import { FormikProps } from 'formik'
import { DoctorType } from '../clinic/doctor'
import React from 'react'

export type InfoAddress = {
  codigoPostal?: string
  municipio: string
  estado: string
  colonias: Array<string>
}

export interface ProfessionalInformationProps {
  formikProps: FormikProps<DoctorType>
}

export interface ModalProps {
  title: string
  open: boolean
  state: React.Dispatch<React.SetStateAction<boolean>>
}
