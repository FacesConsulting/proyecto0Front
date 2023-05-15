import { ClinicType } from '@/interfaces/auth/auth.interface'
import { FormikProps } from 'formik'
import Image from 'next/image'
import React, { useState } from 'react'

const UpdateLogo = ({
  formikProps
}: {
  formikProps: FormikProps<ClinicType>
}) => {
  const [largeFile, setLargeFile] = useState<boolean>(false)
  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = event.target as HTMLInputElement
    if (
      inputElement &&
      inputElement.files &&
      inputElement.files.length > 0 &&
      inputElement.files[0].size <= 500000
    ) {
      const file = inputElement.files[0]
      setLargeFile(false)
      formikProps.setFieldValue('logoSource', file, true)
      return
    }
    setLargeFile(true)
  }

  console.log(formikProps.values)
  return (
    <div className='lg:flex flex-col items-center justify-center w-full p-4'>
      <div className='mx-auto mb-4 flex justify-center items-center text-gray-400 border border-gray-200 border-dashed rounded-full cursor-pointer w-52 h-52'>
        <div className='flex relative flex-col gap-2 justify-center items-center text-gray-400 bg-gray-100 border border-gray-200 border-dashed rounded-full w-48 h-48 overflow-hidden'>
          <input
            type='file'
            name='logoSource'
            id='logoSource'
            accept='.jpge,.jpg'
            onChange={handleChangeFile}
            className='absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer'
          />
          {formikProps.values.logoSource !== null
            ? (
            <Image
              className='absolute inset-0 z-0 object-cover w-full h-full border-4 border-white'
              src={URL.createObjectURL(
                formikProps.values.logoSource || new Blob()
              )}
              alt={formikProps.values.razonSocial}
              fill
            />
              )
            : (
            <>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='30'
                height='30'
                fill={'#9ca3af'}
                viewBox='0 0 24 24'>
                <path d='M5 4h-3v-1h3v1zm8 6c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11-5v17h-24v-17h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm13 4c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z' />
              </svg>
              <p>Subir logo</p>
            </>
              )}
        </div>
      </div>
      <p className='mt-4 text-center text-gray-500 w-full text-sm'>
        Permitidos *.jpeg, *.jpg tamaño máximo de 500 KB
      </p>
      {largeFile && (
        <div role='alert' className='mt-4 mx-auto w-full lg:w-3/5'>
          <div className='bg-red-600 text-white font-bold rounded-t px-4 py-2 text-sm'>
            Archivo demasiado grande
          </div>
          <div className='border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700'>
            <p className='text-xs'>
              El tamaño maximo permitido es de 500 KB. Si deseas puedes reducir
              el peso de tu imagen en el siguiente{' '}
              <a
                href='https://tinypng.com/'
                target='_blank'
                className='text-red-800 font-semibold underline'>
                enlace.
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default UpdateLogo
