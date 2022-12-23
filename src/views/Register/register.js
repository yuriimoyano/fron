import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logol from "../../assets/Logol.js"
import Boton from "../../components/forms/forms/Boton";
import Input from "../../components/forms/forms/Input";
import { register } from "../../services/AuthService";

import "./register.css";

function Register() {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

  async function onButtonClick(event) {
    event.preventDefault();

    if (passwordInput != confirmPasswordInput) {
      return alert("las contraseñas no coinciden");
    }

    const res = await register(nameInput, ageInput, emailInput, passwordInput);
    console.log(res);
  }

  return (
    <section className="login">
      <div className="container">
        <Link to="/">
          <Logol showText={false} />
        </Link>
        <h1 className="title">
          Registrarse en <b>Ortopedic</b>
        </h1>
        <form className="flex card form">
        <Input onChange={(e) => setNameInput(e.target.value)}>
            Ingrese su nombre
          </Input>
          <Input onChange={(e) => setAgeInput(e.target.value)}>
          Ingrese su edad
          </Input>
          <Input onChange={(e) => setEmailInput(e.target.value)}>
            Ingrese su email
          </Input>
          <Input
            type="password"
            onChange={(e) => setPasswordInput(e.target.value)}
          >
            Ingrese su Contraseña
          </Input>
          <Input
            type="password"
            onChange={(e) => setConfirmPasswordInput(e.target.value)}
          >
            Confirmar Contraseña
          </Input>
          <Boton onClick={onButtonClick} style="fill">
            Registrarme
          </Boton>
        </form>
        <div className="register card">
          <p>
            ¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;