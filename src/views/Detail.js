import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "../ProductInfo"
import { ProductContext } from "../ProductProvider";

const Detail = () => {
    const context = useContext(ProductContext); 
    const params = useParams();    
    const product = context.products.find(p => p.id == params.id)
    return (
    <ProductInfo product={product}/>
    )
 }

export default Detail