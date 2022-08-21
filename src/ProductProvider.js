import axios from 'axios';
import { useEffect, useState,} from 'react';
import React from 'react';


export const ProductContext = React.createContext({
    products: [],
    selected: {},
    agregarProducto: () => {}
});


const ProductProvider = (props) => {
    const [products , setProducts] = useState([]);
    const [selected , setSelected] = useState({});
    const [loading, setLoading] = useState(true);
    const url = `https://fakestoreapi.com/products`;
    
    const agregarProducto = (id, count) => {
        let pastcount = selected[id] || 0;
        setSelected({...selected,[id] : pastcount + count})
        //const newSelected = selected;
        //newSelected[id] = pastcount + count;
        //setSelected(newSelected)
    }

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
    return (
        <ProductContext.Provider value={{products, selected, agregarProducto}}>
          {props.children}
        </ProductContext.Provider>
      );

}

export default ProductProvider