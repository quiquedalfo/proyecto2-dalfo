import React from "react";
const Paginas = (props) => {
    const {onLeftClick, onRightClick, page, totalPages} = props;
    return(
        <div className="paginas">
            <button className="paginas-btn" onClick={onLeftClick}><div>anterior</div></button>
            <div>{page} de {totalPages}</div>
            <button className="paginas-btn" onClick={onRightClick}><div>siguiente</div></button>


        </div>
    );
}
export default Paginas;