import { DoctorType } from '@/interfaces/clinic/doctor'
import { Grid, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'

const NewDoctorForm = () => {
  const initialValues: DoctorType = {
    curp: '',
    nombres: '',
    apellidos: '',
    telefono: '',
    correo: '',
    fecha_nacimiento: '',
    password: '',
    // Direccion
    direccion: '',
    // Preperacion academica
    cedula_profesional: '',
    especialidad: '',
    tipo_registro: 'Medico',
    titulo: ''
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues,
      // validationSchema: validationSchemaSignUp,
      onSubmit: async (values, { resetForm }) => {}
    })

  return (
    <form autoComplete='off' onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id='curp'
            name='curp'
            label='CURP *'
            value={values.curp}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.curp && Boolean(errors.curp)}
            helperText={touched.curp && errors.curp}
            placeholder='JOD'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id='nombres'
            name='nombres'
            label='Nombre(s) *'
            value={values.nombres}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.nombres && Boolean(errors.nombres)}
            helperText={touched.nombres && errors.nombres}
            placeholder='John Doe'
          />
        </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id='apellidos'
              name='apellidos'
              label='Apellidos *'
              value={values.apellidos}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.apellidos && Boolean(errors.apellidos)}
              helperText={touched.apellidos && errors.apellidos}
              placeholder='Lorem Ipsum'
            />
          </Grid>
      </Grid>
      <div className='flex gap-4 mb-4'>
        <TextField
          fullWidth
          id='telefono'
          name='telefono'
          label='Telefóno *'
          value={values.telefono}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.telefono && Boolean(errors.telefono)}
          helperText={touched.telefono && errors.telefono}
          placeholder='12345678945'
        />
        <TextField
          fullWidth
          id='fecha_nacimiento'
          name='fecha_nacimiento'
          label='Fecha de nacimiento *'
          value={values.fecha_nacimiento}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.fecha_nacimiento && Boolean(errors.fecha_nacimiento)}
          helperText={touched.fecha_nacimiento && errors.fecha_nacimiento}
          placeholder='Lorem Ipsum'
        />
      </div>
      <div className='flex gap-4 mb-4'>
        <TextField
          fullWidth
          id='correo'
          name='correo'
          label='Correo Electrónico *'
          value={values.correo}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.correo && Boolean(errors.correo)}
          helperText={touched.correo && errors.correo}
          placeholder='john_doe@example.com'
        />
        <TextField
          fullWidth
          id='password'
          name='password'
          label='Contraseña *'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          placeholder='Lorem Ipsum'
        />
      </div>
    </form>
  )
}

export default NewDoctorForm
