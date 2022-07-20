import React from "react";

const Pokemon = (props) => {
    const { pokemon } = props;
    
    return (
    <div className="pokemon-card">
            <div className="pokemon-img-container">
                <img 
                src= {pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                className="pokemon-img"
                />
            </div>
            <div className="pokemon-card-body">
                <div className="pokemon-card-top">
                <div className="pokemon-name">
                    <h2>{pokemon.name}</h2>
            </div>
                </div>
                <div className="pokemon-card-bottom">
                <div className="pokemon-id">
                    <h3> {pokemon.id} </h3>
                <div/>
                </div>
            </div>
            
            
        </div>
    </div>
    );
};
export default Pokemon