import LoginForm from "@/components/form/login/LoginForm";
import Bg from "@/assets/images/log1.png"
import Image from "next/image";

import img from ".//../../assets/images/log1.png";
const styling = {
    backgroundImage: `url(${img.src})`,
    width:"100%",
    height:"100%"
}
const page = () => {
    return (
        <div
            className=" h-screen w-screen flex justify-center items-center"
            id="login">
            <div className=" w-3/5 h-3/4 rounded-lg flex flex-col lg:flex-row shadow-form">
                <div className="bg-login lg:w-3/5 flex flex-col lg:flex-row " style={styling}>lnnknk</div>
                <div className="w-full lg:w-2/5 flex justify-center items-center">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default page;
