import RegisterClinic from '@/components/form/auth/register/clinic/RegisterClinic'
import AuthContext from '@/context/AuthContext'

const page = () => {
  return (
    <AuthContext>
      <div
        className='bg-white min-h-screen w-screen flex justify-center items-center pt-8 px-4'>
        <div className='w-full lg:w-4/5 rounded-lg shadow-form'>
          <RegisterClinic />
        </div>
      </div>
    </AuthContext>
  )
}

export default page
