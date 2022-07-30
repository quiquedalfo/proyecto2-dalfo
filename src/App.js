import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Inicio from "./views/Inicio";
import Catalogo from "./views/Catalogo";
import Carrito from "./views/Carrito";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from './views/Error';
import Detail from './views/Detail';
import { CountProvider } from './Components/CountContext/CountContext';



const App = () => {
  return (
    <CountProvider>
    <Router>
      <div className='App'>
      <Navbar />
      <Routes>
          <Route path="/" element ={<Inicio />}/>
          <Route path="/Inicio" element ={<Inicio />}/>
          <Route path="/Catalogo" element ={<Catalogo/>}/>
          <Route path="/Carrito" element ={<Carrito/>}/>
          <Route path="products/:id" element ={<Detail/>}/> 
          <Route path="*" element ={<Error/>}/> 
      </Routes>
      </div>
      </Router>
      </CountProvider>
  );
}

export default App;
