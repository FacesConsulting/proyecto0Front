import Image from "next/image";
import Public from "@/assets/images/doc.webp";
import Link from "next/link";
import IconSvg from "@/components/svg/IconSvg";

const About = () => {
  return (
    <section
      className="min-h-screen w-screen bg-white flex justify-center items-center flex-col lg:flex-row lg:pe-16"
      id="about us"
    >
      <div className="w-full lg:w-2/5 h-full flex justify-center items-center">
        <Image src={Public} alt="Public" className="h-3/4" />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-4 lg:w-3/5 lg:flex-row ">
        <div className="w-full pt-12 pb-4 lg:w-1/2">
          <h1 className="text-4xl font-black text-sky-600 mb-4 text-center lg:text-start">
            Consulta Ya!
          </h1>
          <p className="text-gray-500 text-lg text-center px-8 lg:text-start lg:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            molestias harum nam temporibus ex reiciendis vero sapiente expedita
            dolorum ratione, architecto eligendi asperiores suscipit
            reprehenderit praesentium maiores perferendis sequi. Blanditiis.
          </p>
        </div>
        <div className="w-full flex flex-col gap-4 px-8 py-12 lg:w-1/2">
          <Link
            href={""}
            className="bg-sky-500 flex items-center gap-8 p-8 rounded relative "
          >
            <IconSvg
              color="#fff"
              size={30}
              icon="M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z"
            />
            <span className="text-white text-base font-semibold  arrow-left-relative">
              Recerva tu cita medica
            </span>
          </Link>
          <Link
            href={""}
            className="bg-sky-500 flex items-center gap-8 p-8 rounded relative "
          >
            <IconSvg
              color="#fff"
              size={30}
              icon="M8.816 1.321c.815-.816 1.941-1.321 3.184-1.321 1.251 0 2.384.512 3.2 1.338 4.056.308 5.687 1.739 7.382 8.486.664.463 1.418 1.436 1.418 3.489 0 1.765-.986 3.991-3.139 4.906-2.348 3.731-5.484 5.781-8.861 5.781-3.377 0-6.513-2.05-8.862-5.781-2.153-.915-3.138-3.141-3.138-4.906 0-2.053.753-3.026 1.417-3.489 1.732-6.779 3.38-8.213 7.399-8.503zm5.584 16.679h-4.8c.004.012.682 1.884 2.4 1.884 1.782 0 2.396-1.872 2.4-1.884zm5.235-11h-3.894c-.807 1.206-2.182 2-3.741 2-1.559 0-2.934-.794-3.741-2h-3.923c-.222.631-.412 1.304-.58 2-.179.746.964.954.917 1.733-.044.722-.76.953-1.421.661-.184-.082-.469-.079-.673.053-1 .651-.893 4.184 1.554 5.012 1 .339 2.579 3.361 4.288.432.591-1.012 2.455-1.126 3.579-.322 1.123-.804 2.988-.69 3.578.322 1.709 2.929 3.288-.093 4.288-.432 2.448-.828 2.554-4.361 1.554-5.012-.235-.152-.531-.115-.672-.053-.661.293-1.36.094-1.374-.629-.016-.818 1.114-.871.89-1.765-.168-.669-.389-1.356-.629-2zm-3.885 2c-1.124 0-2.094.629-2.607 1.546-.373-.116-.744-.174-1.143-.174s-.77.058-1.143.174c-.513-.917-1.483-1.546-2.607-1.546-1.654 0-3 1.346-3 3s1.346 3 3 3c1.231 0 2.285-.748 2.747-1.811.245-.566.394-1.301 1.003-1.301.609 0 .758.735 1.003 1.301.462 1.063 1.516 1.811 2.747 1.811 1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 4.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm-7.5 0c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm3.75-11.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z"
            />
            <span className="text-white text-base font-semibold  arrow-left-relative">
              Encuentra un doctor
            </span>
          </Link>
          <Link
            href={""}
            className="bg-sky-500 flex items-center gap-8 p-8 rounded relative "
          >
            <IconSvg
              color="#fff"
              size={30}
              icon="M19 22h2v-11.931c-1.16-.753-2.515-1.509-3.815-2.052.329-.544.574-1.189.697-1.877 1.821.75 3.499 1.753 5.118 2.86v13h1v2h-24v-2h1v-13c1.615-1.084 3.298-2.08 5.122-2.83.137.664.387 1.293.728 1.863-1.36.563-2.614 1.267-3.839 2.04l-.011.007v11.92h2v-5h14v5zm-12 1h3v-4h-3v4zm4 0h2v-4h-2v4zm3 0h3v-4h-3v4zm-9-7h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-12-3h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-5-13c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m1 4v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2z"
            />
            <span className="text-white text-base font-semibold  arrow-left-relative">
              Clinicas en tu localidad
            </span>
          </Link>
          <Link
            href={""}
            className="bg-sky-500 flex items-center gap-8 p-8 rounded relative "
          >
            <IconSvg
              color="#fff"
              size={30}
              icon="M15 4h1.22c.489 0 .947.238 1.228.639.862 1.228 3.552 5.361 3.552 5.361s1.392 1.209 2 1.731c.841.723 1 1.3 1 2.269v2.5c0 .828-.672 1.5-1.5 1.5h-1.5c0 1.656-1.344 3-3 3s-3-1.344-3-3h-6c0 1.656-1.344 3-3 3s-3-1.344-3-3h-2c-.551 0-1-.447-1-1v-12c0-.552.448-1 1-1h12v-1h2v1zm-8.931 12.748c.69 0 1.251.56 1.251 1.251 0 .69-.561 1.251-1.251 1.251-.691 0-1.251-.561-1.251-1.251 0-.691.56-1.251 1.251-1.251zm12 0c.69 0 1.251.56 1.251 1.251 0 .69-.561 1.251-1.251 1.251-.691 0-1.251-.561-1.251-1.251 0-.691.56-1.251 1.251-1.251zm-6.069-10.748h-10v10h1.765c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h7.53c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h1.765v-2c0-.491 0-.491-.304-.752l-1.443-1.248h-8.253v-6zm-4 1v2h2v2h-2v2h-2v-2h-2v-2h2v-2h2zm7.958-1h-1.958v4h4.611c-.834-1.274-2.054-3.129-2.653-4z"
            />
            <span className="text-white text-base font-semibold  arrow-left-relative">
              Contacto de emergencia
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
