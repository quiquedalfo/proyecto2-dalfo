import React from "react";
import "../../index.css";

const ItemListContainer = ({greeting}) => {
  return (
    <div className="landing">
      <span>{greeting}</span>
    </div>
  );
};

export default ItemListContainer;