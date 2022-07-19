import React from "react";
import { Link , Outlet} from "react-router-dom";

const Navbar = () => {
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return( 
        <div>
        <nav>
        <img src = {imgUrl} alt="Titulo Pokemon"></img>
        <div className='navbar-btns'>
          <Link to ="/Inicio">Inicio</Link>
          <Link to ="/Catalogo">Catalogo</Link>
          <Link to ="/Buscador">Buscador</Link>
          <Link to ="/Equipo">Equipo</Link>
          <Link to ="/Favoritos">Favoritos</Link>
        </div>
    </nav>
    <Outlet/>
    </div>
    );
}

export default Navbar 
