import RegisterForm from "@/components/form/register/RegisterForm"

const page = () => {
  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center items-start lg:items-center" >
    <div  className=" bg-white w-4/5 sm:w-screen">
      <h1>Registro</h1>
      <RegisterForm />
    </div>
    </div>
  )
}

export default page