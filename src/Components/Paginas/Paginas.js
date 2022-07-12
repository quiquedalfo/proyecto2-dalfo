import React from "react";
const Paginas = (props) => {
    const {onLeftClick, onRightClick, page, totalPages} = props;
    return(
        <div className="paginas">
            <button onClick={onLeftClick}><div>atras</div></button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}><div>adelante</div></button>


        </div>
    );
}
export default Paginas;