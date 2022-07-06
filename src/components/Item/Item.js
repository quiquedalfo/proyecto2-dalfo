import React from "react";
const Item = ({id, title, description, prices, pictureUrl }) => {
     return(
     <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{prices}</p>
        <p>{title}</p>
        <p>{id}</p>
        <img src= {pictureUrl} all={title}/>
        
     </div>
     )
}
export default Item