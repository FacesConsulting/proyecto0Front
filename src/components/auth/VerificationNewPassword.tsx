/* eslint-disable multiline-ternary */
'use client'
import { decodeJWT } from '@/utils/encryptData'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import NewToken from './NewToken'
import NewPasswordForm from '../form/newPassword/NewPasswordForm'

interface LoadingInterface {
  loadingData: boolean
  fetchingData: boolean
}
const VerificacionNewPassword = () => {
  const [loading, setLoading] = useState<LoadingInterface>({
    loadingData: true,
    fetchingData: false
  })
  const [expired, setExpired] = useState<boolean>(false)
  const [id, setId] = useState<string>('')
  const route = useRouter()
  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get('id')?.toString() || ''
    if (id !== '' && id !== null) {
      setId(id)
    }
    const code = queryParameters.get('code')?.toString() || ''
    if (code !== '' && code !== 'null') {
      decodeJWT(code, 'consulta-ya')
        .then((data) => {
          setLoading({ ...loading, loadingData: false })
          console.log(data)
        })
        .catch((error) => {
          console.log(error)
          if (error.message === '"exp" claim timestamp check failed') {
            setExpired(true)
            setLoading({ ...loading, loadingData: false })
          }
        })
      return
    }
    route.push('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route])

  return (
    <div className='w-full p-4 flex flex-col gap-5'>
      {loading.loadingData ? (
        <div role='status' className='max-w-sm animate-pulse'>
          <div className='h-2.5 bg-gray-200 rounded-full w-48 mb-4'></div>
          <div className='h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5'></div>
          <div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
          <div className='h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5'></div>
          <div className='h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5'></div>
          <div className='h-2 bg-gray-200 rounded-full max-w-[360px]'></div>
          <span className='sr-only'>Loading...</span>
        </div>
      ) : (
        <>
          <h1 className='text-center text-lg lg:text-2xl'>
            Confirmación de cambio de contraseña
          </h1>

          <p className='text-md text-center'>
            {!expired ? (
              'Estás a un paso de restablecer tu contraseña, solo da clic en el botón de abajo.'
            ) : (
              <NewToken />
            )}
          </p>
          {!loading.fetchingData && !expired && <NewPasswordForm id = { id } />}
        </>
      )}
    </div>
  )
}

export default VerificacionNewPassword
