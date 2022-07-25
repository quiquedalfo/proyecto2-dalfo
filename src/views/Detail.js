import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const Detail = () => {
    let params = useParams()
    const [products , setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0)
    const url = (`https://fakestoreapi.com/products` + params.id);
    
    useEffect(() => {
        axios.get(url)
        .then(resp =>{ 
            setLoading(false)
            setProducts(resp.data);
        })
        .catch((err) => {
            console.log(err)
        });
    },[params.id]);
    
    if (loading) {
        return(
            <div className='catalogo-loading'>
                Loading
            </div>
        )
    }
    return(
            <div className='catalogo-items'>
            {products.map((params) => {
                return (
            <div className='catalogo-item'>
                <div className='catalogo-title'>
                        {params.title}
                </div>
                <div className='catalogo-img'>
                        <img src={params.image} alt={params.name} />
                </div>
                <div className="catalogo-description">
                    {params.description}
                </div>
                <div className='catalogo-botones'>
                        <button onClick={() => setCount(count + 1)}>+</button>
                        {(params.cantidad = count)}
                        <button onClick={() =>{
                            params.cantidad > 1? setCount(count - 1) : setCount(1);
                        }}>-</button>
                </div>
                <div className='catalogo-price'>
                        {params.price} $
                </div>                   
                <div className='catalogo-btn'>
                        <button className='catalogo-btn-add'>Agregar</button>
                </div>
            </div>
            );
            })} </div>
            )
}



export default Detail