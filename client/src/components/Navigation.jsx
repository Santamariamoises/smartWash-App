import React from "react";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>

    <nav className="headerStyle">
          <ul>
          <NavLink to='/'>Home</NavLink>
          <NavLink to="/registro">Mi cuenta</NavLink>
          </ul>
    </nav>

   </div>
  );
}


export default Navigation;


// <NavLink to="/cita">Ordena!</NavLink>
