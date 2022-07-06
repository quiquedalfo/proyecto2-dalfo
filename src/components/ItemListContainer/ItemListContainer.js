import React from "react";
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {
  function onAddCallBack (n) {
    alert(`Agregados ${n} productos`);
  }
  return (
    <div>
      {greeting}
      <ItemCount 
    stock = {5}
    initial = {1}
    onAdd = {onAddCallBack}
    />
    <ItemList items = {[]}/>
    </div>
    
  );
};

export default ItemListContainer;