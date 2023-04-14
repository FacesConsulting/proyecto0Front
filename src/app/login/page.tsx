import LoginForm from "@/components/form/login/LoginForm";

const page = () => {
  return (
    <div
      className="bg-login h-screen w-screen flex justify-center items-center"
      id="login"
    >
      <div className="bg-transparent w-3/5 h-3/4 rounded-lg flex flex-col lg:flex-row shadow-form">
        <div className="bg-transparent w-full lg:w-3/5">lnnknk</div>
        <div className="w-full lg:w-2/5 flex justify-center items-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default page;
