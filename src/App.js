import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Inicio from "./views/Inicio";
import Catalogo from "./views/Catalogo";
import Equipo from "./views/Equipo";
import Favoritos from "./views/Favoritos";
import Buscador from "./views/Buscador";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from './views/Error';


const App = () => {
  return (
    <Router>
      <div className='App'>
      <Navbar />
      <Routes>
          <Route path="/" element ={<Inicio />}/>
          <Route path="/Inicio" element ={<Inicio/>}/>
          <Route path="/Catalogo" element ={<Catalogo/>}/>
          <Route path="/Buscador" element ={<Buscador/>}/>
          <Route path="/Equipo" element ={<Equipo/>}/>
          <Route path="/Favoritos" element ={<Favoritos/>}/>
          <Route path="*" element ={<Error/>}/> 
      </Routes>
      </div>
      </Router>
  );
}

export default App;
