import '../App.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductInfo from '../ProductInfo';
import { ProductContext } from '../ProductProvider';

const Catalogo = () => {
    const context = useContext(ProductContext);

    return(
        <div>
            <div className='catalogo-titulo'>
            Catalogo
            </div>
            <div className='catalogo-items'>
            {context.products.map((product) => {
                return (
                <div> <ProductInfo product={product}/>
                <Link className="catalogo-btn-ver" to={"/product/" + product.id}>Ver</Link>
                </div>
                )
                    
            })}
            <div>
                
            </div>
        </div>
        </div>
    )

}

export default Catalogo