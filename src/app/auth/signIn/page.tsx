'use client'
import LoginForm from '@/components/form/login/LoginForm'
import img from '@/assets/images/log1.png'
import AuthContext from '@/context/AuthContext'
import Image from 'next/image'
import Public from '../../../assets/svg/Public.svg'
const styling = {
  backgroundImage: `url(${img.src})`
}
const page = () => {
  return (
    <AuthContext>
      <div
        className='bg-white h-screen w-screen flex justify-center items-center pt-8 px-4'
        id='login'>
        <div className=' w-full lg:w-3/5 h-fit rounded-lg flex flex-col lg:flex-row shadow-form'>
          <div
            className='lg:w-3/5 hidden lg:flex items-center bg-login'
            style={styling}>
            <Image src={Public} alt='Image' />
          </div>
          <div className='w-full lg:w-2/5 flex justify-center items-start lg:items-center p-4'>
            <LoginForm />
          </div>
        </div>
      </div>
    </AuthContext>
  )
}

export default page
