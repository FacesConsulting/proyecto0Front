"use client";

import { LoginInterface } from "@/interfaces/auth/auth.interface";
import { Alert, Box, Divider, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { grey } from "@mui/material/colors";
const LoginForm = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<LoginInterface>({ email: "", password: "" });
  const [error, setError] = useState<string>("");
  const { data: session, status } = useSession();

  console.log(session);
  console.log(status);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("error")) {
      setError(urlParams?.get("error") || "");
    }
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    await signIn("credentials", {
      email: user.email,
      password: user.password,
      redirect: true,
      callbackUrl: "/clinic/45",
    });
    setLoading(false);
  };

  return (
    <Box className="w-full px-4">
      <h2 className="text-black mb-4">Inicia sesión</h2>

      <div className="flex justify-center items-center flex-col gap-4 my-4">
        <button className="btn-singIn-oauth" type="button">
          <svg
            viewBox="0 0 36 36"
            className="x1lliihq x1k90msu x2h7rmj x1qfuztq"
            fill="url(#:0R1kjakqbkq75b5klba:)"
            height={24}
            width={24}
          >
            <defs>
              <linearGradient
                x1="50%"
                x2="50%"
                y1="97.0782153%"
                y2="0%"
                id=":0R1kjakqbkq75b5klba:"
              >
                <stop offset="0%" stopColor="#0062E0"></stop>
                <stop offset="100%" stopColor="#19AFFF"></stop>
              </linearGradient>
            </defs>
            <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
            <path
              fill="#fff"
              d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
            ></path>
          </svg>
          <span>Inicia sesión con Facebook</span>
        </button>

        <button className="btn-singIn-oauth" type="button">
          <svg viewBox="0 0 48 48" width={24}>
            <clipPath id="g">
              <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
            </clipPath>
            <g className="colors" clipPath="url(#g)">
              <path fill="#FBBC05" d="M0 37V11l17 13z" />
              <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
              <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
              <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
            </g>
          </svg>
          <span>Inicia sesión con Google</span>
        </button>
      </div>

      <Divider textAlign="center" sx={{ color: grey[400], marginY:2 }}>
        Continua con
      </Divider>
      <form autoComplete="off">
        
        <div className="mb-4">
          <TextField
            fullWidth
            size="small"
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
            size="small"
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
          <LoadingButton
          fullWidth
            onClick={handleSubmit}
            loading={loading}
            variant="contained"
          >
            Inicia sesión
          </LoadingButton>
        </div>
      </form>

      <div className="flex">
        <Link href={"/auth/signUp"} className="text-center text-sm text-slate-500">
          ¿No tienes cuenta? <span className="text-sky-600">Crea una cuenta</span>
        </Link>
      </div>
      {error != "" && (
        <Alert severity="error">Tus accesos son incorrectos</Alert>
      )}
    </Box>
  );
};

export default LoginForm;
