'use client'
import { Button } from "@mui/material";
import React, { useState } from "react";

const SubscribeForm = () => {

    const [email,setEmail] = useState<string>('')

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>)  => {
        e.preventDefault()
        console.log(email)
    }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Ecribe tu correo electrónico"
        onChange={(e) => setEmail(e.target.value) }
      />
      <Button size="large" variant="contained" >Enviar</Button>
    </form>
  );
};

export default SubscribeForm;
