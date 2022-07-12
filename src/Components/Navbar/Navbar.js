import React from "react";

const Navbar = () => {
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return( 
        <nav>
        <div>
            <img src = {imgUrl} alt="Pokemon amarillo en grande"></img>
            <button>
                    Inicio
            </button>
            <button>
                    Buscador
            </button>
            <button>
                    Catalogo
            </button>
        </div>
    </nav>
    );
}

export default Navbar 