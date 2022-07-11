import React, { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [name, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then((res) => res.json())
    .then((json) => setItems(json.name));
},[]);
   return <div>{JSON.stringify(name.map((el) => el.name))}</div>
};

export default ItemListContainer;