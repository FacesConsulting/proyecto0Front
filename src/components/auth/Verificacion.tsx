'use client'
import { decodeJWT } from '@/utils/utils'
import { JWTPayload } from 'jose'
import React, { useEffect, useState } from 'react'

const Verificacion = () => {
  const [token, setToken] = useState<JWTPayload>()

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search)
    const code = queryParameters.get('code')
    if (code) {
      decodeJWT(code, 'consulta-ya').then((data) => {
        console.log(data)
        setToken(data)
      })
    }
  }, [])

  return (
    <div className='w-full p-4 flex flex-col gap-4'>
      <h1 className='text-center'>Confirma tu correo electrónico</h1>
      <p>Hola {token?.nombre + ' ' + token?.apellidos}. Estás a un paso</p>
    </div>
  )
}

export default Verificacion
