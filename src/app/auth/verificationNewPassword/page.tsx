import VerificacionNewPassword from '@/components/auth/VerificationNewPassword'
import { NextPage } from 'next'

const page: NextPage = () => {
  return (
    <div className='bg-white h-screen w-screen flex justify-center items-start pt-8 px-4'>
      <div className='w-full lg:w-2/5 h-max rounded-lg shadow-form'>
        <VerificacionNewPassword />
      </div>
    </div>
  )
}

export default page
