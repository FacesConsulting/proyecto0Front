import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const NewToken = () => {
  const [send, setSend] = useState<boolean>(false)
  const handleSendingToRefreshTheToken = () => {
    setSend(true)
  }

  return (
    <span>
      Lo sentimos, tu token a expirado. Solicita nuevamente un
      <b
        className={`${
          !send
            ? 'text-sky-600 underline underline-offset-4 cursor-pointer'
            : 'text-gray-400 cursor-not-allowed'
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
