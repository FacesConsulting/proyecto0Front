import LoginForm from "@/components/form/login/LoginForm";

const page = () => {
  return (
    <div
      className="bg-sky-300 h-screen w-screen flex justify-center items-center"
      id="login"
    >
      <div className="bg-white w-3/5 h-3/4 rounded-lg flex flex-col lg:flex-row">
        <div className="bg-slate-300 w-full lg:w-3/5">lnnknk</div>
        <div className="w-full lg:w-2/5 flex justify-center items-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default page;
