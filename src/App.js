import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Buscador from './Components/Buscador/Buscador';
import Pokedex from './Components/Pokedex/Pokedex';
import { getPokemons, getPokemonsData } from './Components/List/ListContainer';
const {useState, useEffect}= React;

export default function App() { 
  const [pokemons, setPokemons] = useState([]);
  const [page , setPage] =useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  
  const fetchPokemons = async () => {
    try{
      setLoading(true);
      const data = await getPokemons(25, 25*page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false);
      setTotal(Math.ceil(data.count / 25))
    }catch(err){}
  }
  useEffect(() => {
      fetchPokemons();
  }, [page]) ;
  return (
    <div>
      <Navbar/>
      <div className='App'>
      <Buscador/>
        <Pokedex
        loading = {loading}
        pokemons = {pokemons}
        page={page}
        setPage={setPage}
        total = {total}

        />
      </div>
    </div>
  );
}