import Verificacion from '@/components/auth/Verificacion'
import { NextPage } from 'next'

const page: NextPage = () => {
  return (
    <div className='bg-white h-screen w-screen flex justify-center items-start pt-8 px-4'>
      <div className='w-full lg:w-2/5 h-max rounded-lg shadow-form'>
        <Verificacion />
      </div>
    </div>
  )
}

export default page
