import Link from "next/link";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  return (
    <header id="home">
      <div className="hidden bg-sky-600 md:flex p-3 justify-around text-xs text-white font-normal">
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
      <div className="hidden md:flex header">
        <div>
          <Link href={"/"}>
            {/* <Image src={Sandhuer} alt="Logo Sandhuer" height={70}/> */}
            Proyecto 0
          </Link>
        </div>

        <nav>
          <Link href={"#home"}>inicio</Link>
          <Link href={"#about us"}>nosotros</Link>
          <Link href={""}>contacto</Link>
          <Link href={"/login"}>Login</Link>
          <Link href={""}></Link>
        </nav>
      </div>

      {/* Mobile */}

      <HeaderMobile />
    </header>
  );
};

export default Header;
