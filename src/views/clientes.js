import React from 'react';
import { Link } from 'react-router-dom';
function Clientes() {
    return ( 
        <div className='card'>
            <h1> Bienvenido a la pagina de clientes</h1>
            
        <li>
          <Link to="/message">Message</Link>
        </li>
        <li>
          <Link to="/reservation">Reservation</Link>
        </li>
        </div>
     );
}

export default Clientes;