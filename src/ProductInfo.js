import React, { useContext } from "react";
import './App.css';
import { useState } from "react";
import { ProductContext } from "./ProductProvider";

const ProductInfo = ({product}) => {
    const context = useContext(ProductContext)
    const initialCount = product ? context.selected[product.id] || 1 : 1;
    const [count, setCount ] = useState(parseInt(initialCount))
    if (!product) return null;

    return (
        <div >
        <div className='catalogo-item'>
        <div className='catalogo-title'>
            {product.title}</div>
        <div className='catalogo-img'>
            <img src={product.image} alt={product.name} />
        </div>
        <div className='catalogo-botones'>
            <button onClick={() => setCount(count + 1)}>+</button>
            {count}
            <button onClick={() =>{
                count > 1? setCount(count - 1) : setCount(1);
            }}>-</button>
        </div>
        <div className='catalogo-price'>
            {product.price} $</div>
        
        <div className='catalogo-btn'>
            <button 
            onClick={()=>context.agregarProducto(product.id, count)} 
            className='catalogo-btn-add'>Agregar</button>
        </div>
        </div>
        </div>
    )
 }

export default ProductInfo

