import React from "react";

const Navbar = () => {
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return( 
        <nav>
        <div>
        <img src = {imgUrl} alt="Titulo Pokemon" className="nabvar-img"></img>
        </div>
        <div>
            <button>
                    Buscador
            </button>
            <button>
                    Catalogo
            </button>
            <button>
                    Equipo
            </button>
            <button>
                    Favoritos
            </button>
        </div>
    </nav>
    );
}

export default Navbar 