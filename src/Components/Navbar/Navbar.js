import React from "react";
import { Link , Outlet} from "react-router-dom";

const Navbar = () => {
    return( 
        <div>
        <nav>
        <div className='navbar'>
          <Link to ="/Catalogo">Catalogo</Link>
          <Link to ="/Carrito">Carrito</Link>
          <Link to ="/Inicio">Inicio</Link>
        </div>
    </nav>
    <Outlet/>
    </div>
    );
}

export default Navbar 
