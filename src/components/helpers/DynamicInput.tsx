/* eslint-disable multiline-ternary */
import { Add, Remove } from '@mui/icons-material'
import { Box, Grid, IconButton, TextField, Tooltip } from '@mui/material'
import react, { useState } from 'react'
import IconSvg from '../svg/IconSvg'
import { formatBytes } from '@/utils/utils'
import Image from 'next/image'

interface EspecialidadInterface {
  especialidad: string
  archivo: File | null
}
const DynamicInput = () => {
  const [especialidades, setEspecialidades] = useState<
    Array<EspecialidadInterface>
  >([{ especialidad: '', archivo: null }])

  const handleAdd = () => {
    if (especialidades.length < 5) {
      setEspecialidades([
        ...especialidades,
        { especialidad: '', archivo: null }
      ]) // Copiamos el arreglo y creamos un nuevo array con especialidad y archivo
    }
  }

  const handleChange = (
    event: react.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const values = [...especialidades] // Copiamos el arreglo (especialidades) en la variable (values)
    values[index].especialidad = event.target.value // Accedemos al arreglo en el indice con el nombre y asignamos el valor
    setEspecialidades(values) // Regresamos el arreglo copiado con los nuevos valores
  }

  const handleDelete = (index: number) => {
    if (especialidades.length > 1) {
      const deleteSocial = [...especialidades] // Copias de nuevo el arreglo
      deleteSocial.splice(index, 1) // Eliminamor con la funcion splice el elemento que se recibe (index)
      setEspecialidades(deleteSocial) // Regresamos el arreglo
    }
  }

  const handleChangeFile = (
    event: react.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputElement = event.target as HTMLInputElement
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0]
      const values = [...especialidades] // Copiamos el arreglo (especialidades) en la variable (values)
      values[index].archivo = file // Accedemos al arreglo en el indice con el nombre y asignamos el valor
      setEspecialidades(values)
    }
  }

  const handleDragFile = (
    event: react.DragEvent<HTMLInputElement>,
    index: number
  ) => {
    // Aquí manejas el evento Drag
    event.preventDefault()
    const dt = event.dataTransfer
    if (!dt) return
    const file = dt.files[0]
    const values = [...especialidades] // Copiamos el arreglo (especialidades) en la variable (values)
    values[index].archivo = file // Accedemos al arreglo en el indice con el nombre y asignamos el valor
    setEspecialidades(values)
  }

  const handleValidateTypeOfFile = (document: File | null) => {
    console.log(document)
    if (document?.type.includes('image/') && document !== null) {
      return true
    }

    return false
  }

  return (
    <Box>
      {especialidades.map((data, index) => {
        return (
          <Grid container key={index} spacing={2} alignItems={'center'} mb={2}>
            <Grid item xs={12} lg={5}>
              <TextField
                fullWidth
                id='especialidad'
                label='Especialidad'
                name='especialidad'
                value={data.especialidad}
                onChange={(e) => handleChange(e, index)}
              />
            </Grid>

            <Grid item xs={8} lg={5}>
              <div className='relative flex flex-col text-gray-400 border border-gray-200 border-dashed rounded cursor-pointer'>
                <input
                  type='file'
                  name='archivo'
                  id='archivo'
                  className='absolute inset-0 z-50 w-full h-8 p-0 m-0 outline-none opacity-0 cursor-pointer'
                  onChange={(e) => handleChangeFile(e, index)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => handleDragFile(e, index)}
                />
                <div className='flex flex-col items-center justify-center py-2 text-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='#a1a1aa'
                    viewBox='0 0 24 24'>
                    <path d='M16 16h-3v5h-2v-5h-3l4-4 4 4zm3.479-5.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h3.5v-2h-3.5c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78 3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-3.5v2h3.5c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408z' />
                  </svg>
                  <p className='m-0 text-zinc-400 text-xs'>
                    Arrastre sus archivos aquí o haga clic en esta zona.
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={4} lg={2}>
              {especialidades.length > 1 && (
                <Tooltip title={'Quitar especialidad'}>
                  <IconButton
                    onClick={() => handleDelete(index)}
                    aria-label='remover especialidad'>
                    <Remove />
                  </IconButton>
                </Tooltip>
              )}
              {especialidades.length < 5 && (
                <Tooltip title={'Agregar especialidad'}>
                  <IconButton
                    onClick={() => handleAdd()}
                    aria-label='agregar especialidad'>
                    <Add />
                  </IconButton>
                </Tooltip>
              )}
            </Grid>
          </Grid>
        )
      })}

      <Box>
        <div className='grid grid-cols-2 gap-4 mt-4 md:grid-cols-5'>
          {especialidades.map((especialidad, index) => {
            return (
              <div
                key={index}
                className='relative flex flex-col items-center overflow-hidden text-center bg-gray-100 border rounded cursor-move select-none'
                style={{ paddingTop: '100%' }}>
                <button
                  className='absolute top-0 right-0 z-50 p-1 bg-white rounded-bl focus:outline-none'
                  type='button'>
                  <svg
                    className='w-4 h-4 text-gray-700'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                    />
                  </svg>
                </button>
                <div className='absolute w-12 h-12 text-gray-400 transform top-0 flex justify-center items-center'>
                  {handleValidateTypeOfFile(especialidad.archivo) ? (
                    <Image className='absolute inset-0 z-0 object-cover w-full h-full border-4 border-white' src={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tooltyp.com%2F8-beneficios-de-usar-imagenes-en-nuestros-sitios-web%2F&psig=AOvVaw3jWaUCGnkqsTg3rSVXUfYn&ust=1683241223650000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjy9qug2v4CFQAAAAAdAAAAABAE'} alt={especialidad.especialidad} fill />
                  ) : (
                    <IconSvg
                      color='#9ca3af'
                      size={30}
                      icon='M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm-3.741 17.261c.346-.327.932-.647 1.742-.954.366-.725.731-1.523 1.018-2.232-.242-.506-.397-1.039-.464-1.588-.25-2.061 2.083-1.907 1.729.012-.068.368-.23.884-.483 1.536.367.654.849 1.146 1.233 1.472.524-.084 1.271-.17 1.797-.093 1.396.205 1.219 1.744-.021 1.744-.649 0-1.463-.507-1.972-.896-.779.144-1.613.365-2.33.618-.229.44-.536 1.001-.811 1.396-1.143 1.646-2.65.127-1.438-1.015zm1.199.055c-.253.128-.609.348-.801.559-.299.328-.103.586.257.233.178-.172.392-.492.544-.792zm4.44-1.201c.235.158.558.323.911.33.412.008.377-.261-.082-.328-.2-.03-.488-.03-.829-.002zm-2.947-.128c.328-.109 1.036-.274 1.213-.315-.02-.021-.528-.544-.695-.832-.134.335-.509 1.127-.518 1.147zm.314-3.983c-.057.296.029.771.129 1.061.113-.237.255-.806.197-1.085-.056-.279-.262-.299-.326.024z'
                    />
                  )}
                </div>
                <div className='absolute bottom-0 left-0 right-0 flex flex-col p-2 text-xs bg-white bg-opacity-50'>
                    <p className='w-full font-bold text-xs text-gray-900 truncate'>{especialidad.archivo?.name}</p>
                    <small className='text-xs text-gray-900'>{formatBytes(especialidad.archivo?.size)}</small>
                </div>
              </div>
            )
          })}
        </div>
      </Box>
    </Box>
  )
}

export default DynamicInput
