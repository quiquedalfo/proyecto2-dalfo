import React from "react";

const Carrito = () => {
    return(
        <div>
        <div> Tu carrito </div>
        <ul>{localStorage.getItem()}</ul>
        </div>
    )   
}

export default Carrito