import Verificacion from '@/components/auth/Verificacion'

const page = () => {
  return (
    <div className='bg-white h-screen w-screen flex justify-center items-center pt-8 px-4'>
      <div className='w-full lg:w-3/5 h-max rounded-lg shadow-form'>
        <Verificacion />
      </div>
    </div>
  )
}

export default page
