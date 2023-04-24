"use client"
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";
import { signIn } from "next-auth/react";

const Header = () => {
  return (
    <header id="home">
      <div className="flex bg-sky-600 p-3 justify-around text-xs text-white font-normal top-header">
        <div className="flex gap-2 items-center">
          <i className="fas fa-phone" />
          <span className="text-sm">+52 00 00000 0000</span>
        </div>
        <div className="flex gap-4 items-center">
          <i className="fas fa-paper-plane" />
          <span className="text-sm">mail@mail.com.mx</span>
        </div>
        <ul className="links">
          <li className="text-sm">FAQs</li>
          <li>
            <i className="fab fa-facebook-f" />
          </li>
          <li>
            <i className="fab fa-instagram" />
          </li>
          <li>
            <i className="fab fa-whatsapp" />
          </li>
        </ul>
      </div>
      <div className="flex header">
        <div>
          <Link href={"/"}>
            {/* <Image src={Sandhuer} alt="Logo Sandhuer" height={70}/> */}
            Consulta Ya!
          </Link>
        </div>

        <nav>
          <Link href={"#home"}>inicio</Link>
          <Link href={"#about us"}>nosotros</Link>
          <Link href={""}>contacto</Link>
          <Link href={"/auth/signIn"}>inicia sesión</Link>
          <button onClick={() => signIn()}>Iniciar</button>
        </nav>
      </div>
      <HeaderMobile />
    </header>
  );
};

export default Header;
