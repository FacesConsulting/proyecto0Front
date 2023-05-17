'use client'
import { Box } from '@mui/material'
import NewClinicForm from './NewClinicForm'
import { LoadingButton } from '@mui/lab'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { decodeJWT } from '@/utils/encryptData'
import { JWTPayload } from 'jose'
import Swal from 'sweetalert2'

interface StatusInterface {
  expired: boolean
  verifiedCode: boolean
}
const RegisterClinic = () => {
  const [data, setData] = useState<JWTPayload>()
  const [status, setStatus] = useState<StatusInterface>({
    verifiedCode: false,
    expired: false
  })
  const route = useRouter()
  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search)
    const code = queryParameters.get('code')?.toString() || ''
    if (code !== '' && code !== 'null') {
      decodeJWT(code, 'consulta-ya')
        .then((data) => {
          console.log(data)
          setData(data)
        })
        .catch((error) => {
          if (error.message === '"exp" claim timestamp check failed') {
            setStatus({ ...status, expired: true })
          }
        })
      return
    }

    route.push('/')
  }, [route, status])

  return (
    <>
      <Box position={'relative'} padding={4}>
        <NewClinicForm />
        <Box
          display={status.verifiedCode ? 'none' : 'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          position={'absolute'}
          zIndex={status.verifiedCode ? 0 : 50}
          top={0}
          right={0}
          width={'100%'}
          height={'100%'}
          sx={{ backdropFilter: 'blur(20px)', userSelect: 'none' }}
          borderRadius={4}>
          <ValidationCodeForm
            code={(data?.codigoVerificacion as string) || ''}
            status={status}
            changeStatusVerified={setStatus}
          />
        </Box>
      </Box>
    </>
  )
}

const ValidationCodeForm = ({
  code,
  status,
  changeStatusVerified
}: {
  code: string
  status: StatusInterface
  changeStatusVerified: React.Dispatch<React.SetStateAction<StatusInterface>>
}) => {
  const [codigo, setCodigo] = useState('')
  useEffect(() => {
    if (code !== '') {
      setCodigo(code)
    }
  }, [code])

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      first: { value: string }
      second: { value: string }
      third: { value: string }
      fourth: { value: string }
    }

    const first = target.first.value
    const second = target.second.value
    const third = target.third.value
    const fourth = target.fourth.value

    const inputCode = first + second + third + fourth

    console.log(inputCode)

    if (inputCode === codigo) {
      changeStatusVerified({ ...status, verifiedCode: true })
      return
    }

    Swal.fire('Oopss', 'Código incorrecto, verifica e intenta nuevamente', 'error')
  }

  return (
    <Box width={500} p={4}>
      <h3 className='mb-4'>Verifica tu identidad</h3>
      <p>
        Se ha enviado un correo electrónico con un código de verificación
        a&nbsp;
        <strong>correo@example.com.</strong>&nbsp;Introduce el código
        proporcionado para verificar que esta es tu dirección.
      </p>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-row justify-center text-center px-2 mt-5'>
          <input
            className='m-2 border h-10 w-10 text-center form-control rounded'
            type='text'
            id='first'
            maxLength={1}
          />
          <input
            className='m-2 border h-10 w-10 text-center form-control rounded'
            type='text'
            id='second'
            maxLength={1}
          />
          <input
            className='m-2 border h-10 w-10 text-center form-control rounded'
            type='text'
            id='third'
            maxLength={1}
          />
          <input
            className='m-2 border h-10 w-10 text-center form-control rounded'
            type='text'
            id='fourth'
            maxLength={1}
          />
        </div>
        <div className='w-full text-end'>
          <LoadingButton type='submit'>Verificar</LoadingButton>
        </div>
      </form>
    </Box>
  )
}

export default RegisterClinic
