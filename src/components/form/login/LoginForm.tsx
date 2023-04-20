"use client";

import { LoginInterface } from "@/interfaces/auth/auth.interface";
import { Alert, Box, Divider, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const LoginForm = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<LoginInterface>({ email: "", password: "" });
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams.has("error")){
      setError(urlParams?.get("error") || "")
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const result = await signIn("credentials", {
      email: user.email,
      password: user.password,
      redirect: true,
      callbackUrl: "/",
    });
    setLoading(false)
  };

  return (
    <Box className="w-full px-4">
      <form autoComplete="off">
        <h1 className="text-sky-600 mb-4">Inicia sesión</h1>
        <div className="mb-4">
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Correo electrónico"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="joe_doe@example.com"
          />
        </div>
        <div className="mb-2">
          <TextField
            fullWidth
            type="password"
            id="password"
            name="password"
            label="Contraseña"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className="text-right mb-4">
          <Link
            href={"/forgot-password"}
            className="text-center text-xs text-slate-500"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <div className="text-center box mb-4">
          <LoadingButton onClick={handleSubmit} loading={loading}>Inicia sesión</LoadingButton>
        </div>
        <Divider textAlign="center" className="text-slate-400 mb-4">
          Continua con
        </Divider>
        <div className="text-center mb-4 mr-2 ml-2">
          <button className="mr-2 text-lg bg-transparent" type="button">
            <i className="fab fa-google"></i>
          </button>
          <button className="ml-1 text-lg bg-transparent" type="button">
            {" "}
            <i className="fab fa-facebook"></i>
          </button>
        </div>
        <div className="text-center mb-3">
          <Link href={""} className="text-center text-sm text-slate-500">
            ¿Necesitas una cuenta? <span className="">Registrate</span>
          </Link>
        </div>

        {
          error != "" &&
        <Alert severity="error">Tus accesos son incorrectos</Alert>
        }
      </form>
    </Box>
  );
};

export default LoginForm;
