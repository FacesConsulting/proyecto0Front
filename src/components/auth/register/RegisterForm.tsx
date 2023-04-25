"use client";

import { SingUpInterface } from "@/interfaces/auth/auth.interface";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const captchaRef = useRef(null);
  const [token, setToken] = useState("");
  const [user, setUser] = useState<SingUpInterface>({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
  });
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  };

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name)
  }

  return (
    <Box className="w-full px-4">
      <h2 className="text-black mb-6">Registro</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="flex gap-4 mb-4">
          <TextField
            fullWidth
            required
            size="small"
            id="firstname"
            name="firstname"
            label="Nombre(s)"
            value={user.firstname}
            onChange={(e) => setUser({ ...user, firstname: e.target.value })}
            placeholder="John Doe"
          />
          <TextField
            fullWidth
            required
            size="small"
            id="lastname"
            name="lastname"
            label="Apellidos"
            value={user.lastname}
            onChange={(e) => setUser({ ...user, lastname: e.target.value })}
            placeholder="Lorem Ipsum"
          />
        </div>
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
        <div className="mb-4">
          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel htmlFor="password">
              Contraseña
            </InputLabel>
            <OutlinedInput
              fullWidth
              size="small"
              id="password"
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <div className="mb-4">
          <TextField
            required
            fullWidth
            size="small"
            type="password"
            id="password"
            name="password"
            label="Confirmar Contraseña"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <FormControl>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={
              <Typography fontSize={11}>
                Acepto &nbsp;
                <Link href={""} className="text-sky-700">
                  Terminos y Servicios
                </Link>
              </Typography>
            }
          />

          <FormControlLabel
            control={<Checkbox size="small" />}
            label={
              <Typography fontSize={11}>
                Acepto &nbsp;
                <Link href={""} className="text-sky-700">
                  Política de privacidad.
                </Link>
              </Typography>
            }
          />
        </FormControl>

        <div className="my-4 flex justify-center">
          <HCaptcha
            ref={captchaRef}
            sitekey={"da4ad4a2-1610-4b1b-8986-ae0137a4bce3"}
            onVerify={(t) => setToken(t)}
          />
        </div>

        <div className="text-center box mb-4">
          <LoadingButton
            fullWidth
            variant="contained"
            type="submit"
            loading={loading}
          >
            Registrate
          </LoadingButton>
        </div>
      </form>

      <div className="flex mb-4">
        <Link
          href={"/auth/signIn"}
          className="text-center text-sm text-slate-500"
        >
          ¿Ya tienes una cuenta? &nbsp;
          <span className="text-sky-700 hover:underline decoration-1">Inicia sesión</span>
        </Link>
      </div>
    </Box>
  );
};

export default RegisterForm;
