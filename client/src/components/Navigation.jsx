import React from "react";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>

    <nav className="headerStyle">
          <ul>
          <button type="button" className="btn btn-dark"><NavLink to="/">Home</NavLink></button>
          <NavLink to="/cita">Ordena ahora</NavLink>
          <NavLink to='/about'>About</NavLink>
          </ul>
    </nav>

   </div>
  );
}


export default Navigation;
