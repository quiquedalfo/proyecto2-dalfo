import React, { useContext } from "react";
import { ProductContext } from "../ProductProvider";


const Carrito = () => {
    const context = useContext(ProductContext)

    const ids = Object.keys(context.selected); // [1,2,3]
    const products = ids.map(id => context.products.find(p => p.id == id))
    // const products = context.products.filter(p => ids.includes(p.id));
    return(
        <div>
        <div> Tu carrito </div>
        <ul>
        <li>
                
        </li>
        </ul>
        <pre>{JSON.stringify(context.selected, null, 2)}</pre>
        </div>
    )   
}

export default Carrito