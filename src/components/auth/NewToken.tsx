import { api } from '@/api/axiosAPI'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import Swal from 'sweetalert2'

const NewToken = () => {
  const [send, setSend] = useState<boolean>(false)
  const route = useRouter()
  const handleSendingToRefreshTheToken = async () => {
    setSend(false)
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get('id')?.toString() || ''
    const queryParameter = new URLSearchParams(window.location.pathname)
    const encodedUrl = queryParameter.toString()
    console.log(encodedUrl)
    const url = decodeURIComponent(encodedUrl)
    console.log(url)
    try {
      const res = await api.post('login/auth/refreshToken', {
        id,
        url
      })
      if (res.status !== 200) {
        setSend(true)
        throw new Error(res.data)
      }
      Swal.fire(
        'Se le ha enviado un correo, por favor verifique ',
        res.data,
        'success'
      )
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Opsss.',
        text: error.message
      })
    }
    route.push('/')
  }
  return (
    <span>
      Lo sentimos, tu token a expirado. Solicita nuevamente un
      <b
        className={`${
          !send
            ? 'text-sky-600 underline underline-offset-4 cursor-pointer'
            : 'text-gray-400 cursor-pointer'
        } text-md`}
        onClick={() => {
          if (send) {
            toast.error('Espera tu token ha sido actualizado')
            return
          }
          handleSendingToRefreshTheToken()
        }}>
        &nbsp;nuevo token.
      </b>
    </span>
  )
}

export default NewToken
