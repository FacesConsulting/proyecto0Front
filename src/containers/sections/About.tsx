import Image from "next/image";
import Public from "@/assets/images/doc.jpg";
import Link from "next/link";

const About = () => {
  return (
    <div
      className="h-screen w-screen bg-white flex flex-col lg:flex-row lg:pe-16"
      id="about us"
    >
      <div className="w-full lg:w-2/5 h-full flex justify-center items-center">
        <Image src={Public} alt="Public" className="h-3/4" />
      </div>
      <div className="w-full lg:w-3/5 h-full flex justify-center items-center gap-4">
        <div className="w-1/2">
          <h1 className="text-4xl font-black text-sky-600 mb-4">Conecta Salud</h1>
          <p className="text-gray-500 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            molestias harum nam temporibus ex reiciendis vero sapiente expedita
            dolorum ratione, architecto eligendi asperiores suscipit reprehenderit
            praesentium maiores perferendis sequi. Blanditiis.
          </p>
        </div>
        <div className="w-1/2">
            <Link href={""}>

            </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
