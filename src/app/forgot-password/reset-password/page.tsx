import img from './/../../../assets/images/log1.png'
import NewPasswordFrom from '@/components/form/newPassword/NewPasswordForm'

const styling = {
  backgroundImage: `url(${img.src})`
}
const page = () => {
  return (
    <div
      className='bg-white h-screen w-screen flex justify-center items-center'
      >
      <div className=' w-3/5 h-3/4 rounded-lg flex flex-col lg:flex-row shadow-form'>
        <div
          className='lg:w-3/5 flex flex-col lg:flex-row bg-login'
          style={styling}></div>
        <div className='w-full lg:w-2/5 flex justify-center items-center'>
          <NewPasswordFrom id={''} />
        </div>
      </div>
    </div>
  )
}

export default page
