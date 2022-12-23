import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"
import "../../assets/global.css"
import Logol from "../../assets/Logol";
import { useState,useContext } from "react";
import { useCookies } from "react-cookie";
import TokenContext from "../../contexts/TokenContext";
import UserContext from "../../contexts/UserContetx";
import Input from "../../components/forms/forms/Input";
import Boton from "../../components/forms/forms/Boton";
import { login } from "../../services/AuthService";
import "../../assets/forms.css"

function Login() {
  const { setToken } = useContext(TokenContext);
  const { setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["token", "email"]);

  const navigate = useNavigate();

  async function onButtonClick(event) {
    event.preventDefault();
    const token = await login(email, password);
    if (token) {
      setToken(token);
      setCookie("token", token, { maxAge: 7 * 24 * 60 * 60 });
      setUser({ email: email });

      setCookie("email", email, { maxAge: 7 * 24 * 60 * 60 }); //Expiración en 7 días
      navigate("/panel");
    } else {
      alert("Credenciales Incorrectas");
    }
  }

  return (
    <section className="login">
      <div className="container">
          <Logol></Logol>
          <h1 className="title">
          Iniciar Sesión en <b>Ortopedic</b>
          </h1>
          <p>¡Que gusto verte nuevamente!</p>
          <form className="flex card form">
            <Input onChange={(event) => setEmail(event.target.value)}>
            Email
            </Input>
            <Input
            type="password"
            onChange={(event) => setPassword(event.target.value)}>
            Contraseña
            </Input>

            <Boton onClick={onButtonClick} style={"fill"}>
            Iniciar Sesión
           </Boton>
         </form>
        <div className="register card">
          <p>
            ¿Nuevo en Ortopedic? <Link to="/client/new">Crear una cuenta</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

    

export default Login;
