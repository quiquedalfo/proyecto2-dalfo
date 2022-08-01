import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Inicio from "./views/Inicio";
import Catalogo from "./views/Catalogo";
import Carrito from "./views/Carrito";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from './views/Error';
import Detail from './views/Detail';


const App = () => {
  return (
    
    <Router>
      <div className='App'>
      <Navbar />
      <Routes>
          <Route path="/" element ={<Inicio />}/>
          <Route path="/Inicio" element ={<Inicio />}/>
          <Route path="/Catalogo" element ={<Catalogo/>}/>
          <Route path="/Carrito" element ={<Carrito/>}/>
          <Route path="product/:id" element ={<Detail/>}/> 
          <Route path="*" element ={<Error/>}/> 
      </Routes>
      </div>
      </Router>
  );
}

export default App;
