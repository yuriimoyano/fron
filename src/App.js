import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/home/home";
import Login from "./views/login/login";
import Register from "./views/Register/register";
import Nav from "./components/forms/forms/navs";
import Clientes from "./views/clientes";
import "./assets/global.css";
import { TokenProvider } from "./contexts/TokenContext";
import { UserProvider } from "./contexts/UserContetx";
import { CookiesProvider } from "react-cookie"
import UserPanel from "./views/Panel/UserPAnel";


function App() {
  return (
    <div className="links">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/login" element={<CookiesProvider>
          <TokenProvider>
            <UserProvider>
             <Login/> 
            </UserProvider>
          </TokenProvider>
        </CookiesProvider>
      }
      />
        <Route path="/client/new" element={<CookiesProvider>
          <TokenProvider>
            <UserProvider>
             <Register/> 
            </UserProvider>
          </TokenProvider>
        </CookiesProvider>
      }
      />
      <Route path="/panel" element={<CookiesProvider>
          <TokenProvider>
            <UserProvider>
             <UserPanel/> 
            </UserProvider>
          </TokenProvider>
        </CookiesProvider>
      }
      />
      </Routes>
    </div>
  );
}

export default App;
