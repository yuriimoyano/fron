import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TokenContext";

import "./UserPanel.css";

function UserPanel() {
  const { token } = useContext(TokenContext);
  const [cookies, setCookie] = useCookies(["token"]);

  let currentToken;

  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    console.log(token);
    console.log(cookies.token);
    if (!token && !cookies.token) {
      return navigate("/login");
    } else {
      if (token) {
        currentToken = token;
      } else {
        currentToken = cookies.token;
      }
    }
  }, []);

  return (
    <section className="user-panel">
      <div className="container">
        <div className="balance card flex">
          <h1>Mi Saldo:</h1>
          <p>$ 7,051,913</p>
        </div>

        <h1>Movimientos</h1>

        <div className="transactions card"></div>
      </div>
    </section>
  );
}

export default UserPanel;