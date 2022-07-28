import '../App.css';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CountContext from '../Components/CountContext/CountContext';

const Catalogo = () => {
    const CountContextValue = useContext(CountContext)
    const [products , setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount ] = useState(CountContextValue)
    const url = `https://fakestoreapi.com/products`;
        
    useEffect(() => {
        axios.get(url)
        .then(resp =>{ 
            setLoading(false)
            setProducts(resp.data);
        })
        .catch((err) => {
            console.log(err) 
        });
    },[ url, setProducts, setLoading]);
    
    if (loading) {
        return(
            <div className='catalogo-loading'>
                Loading
            </div>
        )
    }
    return(
        <CountContext.Provider value={1}>
        <div>
            <div className='catalogo-titulo'>
            Catalogo
            </div>
            <div className='catalogo-items'>
            {products.map((product) => {
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
                        {(product.cantidad = count)}
                        <button onClick={() =>{
                            product.cantidad > 1? setCount(count - 1) : setCount(1);
                        }}>-</button>
                    </div>
                    <div className='catalogo-price'>
                        {product.price} $</div>
                    
                    <div className='catalogo-btn'>
                        <button 
                        onClick={()=>localStorage.setItem(product.id, count)} 
                        className='catalogo-btn-add'>Agregar</button>
                        <Link className="catalogo-btn-ver" to={"Products/" + product.id}>Ver</Link>
                    </div>
                    </div>
                    </div>
                )
            })}
            <div>
                
            </div>
        </div>
        </div>
        </CountContext.Provider>

    )

}

export default Catalogo