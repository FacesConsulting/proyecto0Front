import { FormikProps } from 'formik'
import { DoctorType } from '../clinic/doctor'

export type InfoAddress = {
  codigoPostal?: string
  municipio: string
  estado: string
  colonias: Array<string>
}

export interface ProfessionalInformationProps {
  formikProps: FormikProps<DoctorType>
}
