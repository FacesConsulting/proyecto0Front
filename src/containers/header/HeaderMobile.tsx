"use client";

import Image from "next/image";

import { Divider, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import { grey } from "@mui/material/colors";
import Link from "next/link";

const HeaderMobile = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="relative md:hidden bg-blue-400">
      <div className="flex items-center justify-between p-3">
        {/* <Image src={Sandhuer} alt="logo" width={150} /> */}
        <h1>Proyecto 0</h1>

        <div className="flex items-center gap-4">
          <IconButton onClick={() => setShow(!show)}>
            <Menu sx={{ color: grey[50] }} />
          </IconButton>
        </div>
      </div>
      <div className={`menu-mobile ${show && "active-menu"}`}>
        <nav className="flex flex-col gap-6 p-5 uppercase">
          <div>
            <Link href={"/account"}>Cuenta</Link>
            <Divider className="mt-2" />
          </div>
          <Link href={"/"}>
            <i className="fas fa-home"></i> inicio
          </Link>
          <Link href={"/about"}>
            <i className="fas fa-newspaper"></i> nosotros
          </Link>
          <Link href={"/contact"}>
            <i className="fas fa-headset"></i> contacto</Link>
        </nav>
      </div>
    </div>
  );
};

export default HeaderMobile;
