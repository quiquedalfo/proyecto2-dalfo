import React from "react";

const Pokemon = (props) => {
    const { pokemon } = props;
    return (
    <div className="pokemons-card">
            <div className="pokemon-name">
                <h2>{pokemon.name}</h2>
            </div>
            <div className="pokemon-id">
                <h3> {pokemon.id} </h3>
                <div/>
            <div className="pokemon-img">
                <img src= {pokemon.sprites.front_default}
                alt={pokemon.name}/>
            </div>
        </div>
    </div>
    );
};

export default Pokemon