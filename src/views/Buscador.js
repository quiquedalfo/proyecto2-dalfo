
import React from "react";
import {searchPokemon} from "../Components/List/ListContainer";
const {useState} = React; 

const Buscador = () => {
    const [search , setSearch] = useState("");
    const [pokemon , setPokemon] = useState();

    const onChange = (e) => {
        setSearch(e.target.value)
    };

    const onClick = async (e)  => {
        const data = await searchPokemon(search);
        setPokemon(data);
    }

    return (
    <div className="buscador-contenedor">
        <div className="buscador">
        <input placeholder="Ingresa un pokemon" onChange={onChange}/>
        </div>
        <div className="buscador-btn">
        <button onClick={onClick}>Buscar</button>
        </div>
        <div>
            {pokemon && 
            <div className="resultado-contenedor">
            <div className="resultado-contenedor-name">Nombre: {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</div>
            <div className="resultado-contenedor-id">ID {pokemon.id}</div>
            <img src= {pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
            </div>
            }
            </div>

    </div>

    );};
export default Buscador;