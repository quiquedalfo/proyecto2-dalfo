import React from "react";
import CartWidget from "../CartWidget/CartWidget";
const Navbar = () => {
    return (
        <div className="App">
           <ul className= "navbar-nav d-flex flex-row">
            <li className="nav-item px-2">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link disabled">Disabled</a>
            </li>
            <li className="nav-item px-2">
              <CartWidget count={1}/>
            </li>
           </ul> 
        </div>
      );
}
 export default Navbar