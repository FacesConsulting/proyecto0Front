import { ClinicType } from '@/interfaces/auth/auth.interface'
import { Button, Grid } from '@mui/material'
import { FormikProps } from 'formik'
import React, { useState } from 'react'
import ModalPrivacyPolicy from '@/components/modals/signUp/ModalPrivacyPolicy'

interface GeneralDataProps {
  formikProps: FormikProps<ClinicType>
}

const Politics = ({ formikProps }: GeneralDataProps) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <Grid container spacing={2} marginBottom={3}>
        <Grid item xs={12} textAlign={'center'}>
          <Button
            onClick={() => {
              if (
                !formikProps.values.terminos ||
                !formikProps.values.politicas
              ) {
                setOpen(true)
              } else {
                console.log(formikProps.errors)
                formikProps.values.terminos = false
                formikProps.values.politicas = false
                setOpen(true)
              }
            }}>
            {formikProps.values.terminos && formikProps.values.politicas
              ? 'Volver a leer Terminos y Condiciones y Politicas de Privacidad'
              : (!formikProps.values.terminos
                  ? 'Terminos y Condiciones'
                  : 'Politica de Privacidad') }
          </Button>
        </Grid>
      </Grid>
      <ModalPrivacyPolicy
        open={open}
        state={setOpen}
        formikProps={formikProps}
      />
    </>
  )
}

export default Politics
