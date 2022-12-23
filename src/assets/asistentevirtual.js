import React from 'react';
import asistent from "./asistentevirtual.png"

function Asistente() {

    const imgStyle = {
        widht:"40 px",
        height:"40 px"
    }
    const style ={
        alignItems:"center",
        
    }
    return (  
        <div className='asistente' style={style}>
            <img src={asistent} style={imgStyle}></img>
            <h1> Asistente Virtual </h1>
        </div>
    );
}

export default Asistente;