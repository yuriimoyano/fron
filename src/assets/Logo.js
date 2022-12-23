import React from 'react';
import logo from "./orthopedic.png"

function Logo() {

    const imgStyle = {
        widht:"40 px",
        height:"40 px"
    }
    const style ={
        alignItems:"center",
        
    }
    return (  
        <div className='logo flex' style={style}>
            <img src={logo} style={imgStyle}></img>
            <h1>Ortopedic</h1>
        </div>
    );
}

export default Logo;