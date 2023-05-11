import RegisterClinic from '@/components/form/auth/register/RegisterClinic'
import AuthContext from '@/context/AuthContext'

const page = () => {
  return (
    <AuthContext>
      <div
        className='bg-white h-screen w-screen flex justify-center items-center pt-8 px-4'
        id='login'>
        <div className=' w-full lg:w-4/5 h-max rounded-lg flex flex-col lg:flex-row shadow-form'>
          <RegisterClinic />
        </div>
      </div>
    </AuthContext>
  )
}

export default page
