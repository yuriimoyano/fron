import React from 'react';
import Boton from '../../components/forms/forms/Boton';
import "./reservation.css"
function Reservation() {
    
    return ( 
        <div className='reservation'>
            <h1 className='titulo'> Bienvenido a la pagina de reservaciones </h1>
            <Boton style ="boton"> Buscar reservacion </Boton>
            <Boton style ="boton"> Agregar reservacion </Boton>
            <Boton style ="boton"> Actualizar reservacion </Boton>
            <Boton style ="boton"> Eliminar reservacion </Boton>
        </div>
     );
}

export default Reservation;