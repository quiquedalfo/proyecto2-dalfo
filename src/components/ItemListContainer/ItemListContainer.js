import React from "react";
import "../../index.css";
import ItemCount from "../ItemCount/index";
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {
  return (
    <div>
      {greeting}
      <ItemCount 
    stock = {5}
    initial = {1}
    onAdd = {(n) => alert(`Agregados ${n} productos`)}
    />
    <ItemList items = {[]}/>
    </div>
    
  );
};

export default ItemListContainer;