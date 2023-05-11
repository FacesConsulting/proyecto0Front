import Image from 'next/image'
import React from 'react'
import { Toast, toast } from 'react-hot-toast'

const ToastCustom = ({ t }: { t: Toast }) => {
  return (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
      <div className='flex-1 w-0 p-4'>
        <div className='flex items-start'>
          <div className='flex-shrink-0 pt-0.5'>
          </div>
          <div className='ml-3 flex-1'>
            <p className='text-sm font-medium text-gray-900'>Emilia Gates</p>
            <p className='mt-1 text-sm text-gray-500'>
              Sure! 8:30pm works great!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToastCustom
