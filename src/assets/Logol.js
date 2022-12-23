import React from 'react';
import logo from "./orthopedic.png"

function Logol() {

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
        </div>
    );
}

export default Logol;