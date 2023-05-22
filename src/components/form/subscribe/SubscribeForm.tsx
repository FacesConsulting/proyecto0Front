'use client'
import { fetchingDataEncrypted } from '@/utils/encryptData'
import { expresiones } from '@/utils/utils'
import { Button, CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

const SubscribeForm = () => {
  const [email, setEmail] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!expresiones.correo.test(email)) {
      Swal.fire(
        'Correo electrónico invalido',
        'El correo electrónico proporciondo, no tiene el formato correcto. Ej loremIpsum@example.com',
        'warning'
      )
    }
    setLoading(true)
    try {
      const res = await fetchingDataEncrypted(
        JSON.stringify({ correo: email }),
        '/clinica/clinica/teamInvitation',
        'post'
      )

      const { severity, title, message } = res.data
      Swal.fire({
        icon: severity.toLowerCase(),
        title,
        text: message
      })
    } catch (error: any) {
      const { severity, title, message } = error.response.data
      Swal.fire({
        icon: severity.toLowerCase(),
        title,
        text: message
      })
    }
    setLoading(false)
  }

  return (
    <form className='flex' onSubmit={handleSubmit}>
      <input
        type='text'
        className='form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-400 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-500 focus:bg-white focus:border-blue-600 focus:outline-none'
        placeholder='Ecribe tu correo electrónico'
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button size='large' variant='contained' type='submit' >
        {loading ? <CircularProgress color='inherit' size={20} /> : 'Enviar'}
      </Button>
    </form>
  )
}

export default SubscribeForm
