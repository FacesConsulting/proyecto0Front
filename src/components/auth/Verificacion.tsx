'use client'
import { decodeJWT } from '@/utils/utils'
import React, { useEffect } from 'react'

const Verificacion = () => {
  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search)
    const code = queryParameters.get('code')
    if (code) {
      decodeJWT(code, 'consulta-ya').then((data) => {
        console.log(data)
      })
    }
  }, [])

  return (
    <div className='w-full lg:w-1/2 flex justify-center items-start lg:items-center p-4'>
      <h1></h1>
      <h1>s</h1>
    </div>
  )
}

export default Verificacion
