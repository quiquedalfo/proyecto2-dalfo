import React from "react";

const Carrito = () => {
    return(
        <div>
        <div> Tu carrito </div>
        <div>{localStorage.getItem()}</div>
        </div>
    )   
}

export default Carrito