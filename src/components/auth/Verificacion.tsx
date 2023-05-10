/* eslint-disable multiline-ternary */
'use client'
import { api } from '@/api/axiosAPI'
import { decodeJWT } from '@/utils/utils'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import NewToken from './NewToken'
import Swal from 'sweetalert2'

interface LoadingInterface {
  loadingData: boolean
  fetchingData: boolean
}
const Verificacion = () => {
  const [loading, setLoading] = useState<LoadingInterface>({
    loadingData: true,
    fetchingData: false
  })
  const [expired, setExpired] = useState<boolean>(false)
  const route = useRouter()
  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search)
    const code = queryParameters.get('code')?.toString() || ''
    if (code !== '' && code !== 'null') {
      decodeJWT(code, 'consulta-ya')
        .then((data) => {
          setLoading({ ...loading, loadingData: false })
        })
        .catch((error) => {
          if (error.message === '"exp" claim timestamp check failed') {
            setExpired(true)
            setLoading({ ...loading, loadingData: false })
          }
        })
      return
    }

    route.push('/')
  }, [route])

  const handleVerifyEmail = async () => {
    setLoading({ ...loading, fetchingData: true })
    const queryParameters = new URLSearchParams(window.location.search)
    const code = queryParameters.get('code')?.toString() || ''
    try {
      const res = await api.post('login/auth/verifyEmail', {
        jwt: code
      })

      if (res.status !== 200) {
        setLoading({ ...loading, fetchingData: false })
        throw new Error(res.data)
      }
      Swal.fire('Verificado', res.data, 'success')
      route.push('/auth/signIn')
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Opsss.',
        text: error.message
      })
    }
  }

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
            Confirmación de correo electrónico
          </h1>

          <p className='text-md text-center'>
            {!expired ? (
              'Estás a un paso de poder accerder a tu cuenta, solo da clic en el botón de abajo y podrás acceder a ella.'
            ) : (
              <NewToken />
            )}
          </p>
          {!loading.fetchingData && !expired && (
            <button
              type='button'
              className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl cursor-pointer focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
              onClick={handleVerifyEmail}>
              Confirmar
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default Verificacion
