import AuthContext from '@/context/AuthContext'
import Public from '../../../assets/svg/Public.svg'
import img from '@/assets/images/log1.png'
import Image from 'next/image'

const styling = {
  backgroundImage: `url(${img.src})`
}

const page = () => {
  const confirmationKey = '12345'

  return (
    <AuthContext>
      <div
        className='bg-white h-screen w-screen flex justify-center items-center pt-8 px-4'
        id='login'>
        <div className=' w-full lg:w-3/5 h-max rounded-lg flex flex-col lg:flex-row shadow-form'>
          <div className='w-full lg:w-1/2 flex justify-center items-start lg:items-center p-4'>
            <h1>Verificacion</h1>
            <h1>{confirmationKey}</h1>
          </div>
          <div
            className='lg:w-1/2 hidden lg:flex items-center bg-login'
            style={styling}>
            <Image src={Public} alt='Image' />
          </div>
        </div>
      </div>
    </AuthContext>
  )
}

export default page
