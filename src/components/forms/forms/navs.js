import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo";
import Boton from "./Boton";
import "./navs.css";

function Nav(props) {
  return (
    <nav className="nav">
      <ul className=" menu container flex">
        <li>
          <Link to="/">
            <Logo></Logo>
            <li>
        </li>
          </Link>
        </li>
        <li><Link to="/login"><Boton style="wire">INGRESAR</Boton></Link></li>
        <li><Link to="/client/new"><Boton style="wire">REGISTRAR</Boton></Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
