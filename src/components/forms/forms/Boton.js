import React from 'react';
import"./navs.css"

function Boton (props) {
    
    const{ children, onClick, type, style} = props

    return ( 
        <button className={style + "-button"} onClick={onClick} type={type}> 
            <b>{children}</b>
        </button>
     );
}

export default Boton;