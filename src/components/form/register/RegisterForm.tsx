'use client'

import { DatePicker } from "@mui/lab"
import { Box, Button, TextField } from "@mui/material"
import HCaptcha from '@hcaptcha/react-hcaptcha';


const RegisterForm = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
        <TextField id="Nombre" label="Nombre" variant="standard" />
        <TextField id="Apellidos" label="Apellidos" variant="standard" />
        </div>
        <div>
        <TextField id="FechaNacimiento" label="Fecha de Nacimiento" variant="standard" />
        <TextField id="CURP" label="CURP" variant="standard" />
        </div>
        <div>
        <TextField id="email" label="email" variant="standard" />
        <TextField id="Telefono" label="Telefono" variant="standard" />
        </div>
        <div>
        <TextField type="password" id="Contrasena" label="Contraseña" variant="standard" />
        <TextField type="password" id="ConfirmaContrasena" label="Conformia tu Contraseña" variant="standard" />
        </div>
        <h1>Domicilio</h1>
        <div>
        <TextField  id="Estado" label="Estado" variant="standard" /> 
        <TextField id="Municipio" label="Municipio" variant="standard" />        
        </div>
        <div>
        <TextField id="Barrio" label="Barrio/colonia" variant="standard" />
        <TextField  id="zip" label="Codigo Postal" variant="standard" />
        </div>
        <div>
        <FormComponent>
    <HCaptcha
      sitekey="your-sitekey"
      onVerify={(token,ekey) => handleVerificationSuccess(token, ekey)}
    />
</FormComponent>
        <center><Button variant="contained">Registrar</Button>    </center>
        </div>        
    </Box>
  )
}

export default RegisterForm