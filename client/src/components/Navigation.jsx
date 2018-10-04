import React from "react";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>

    <nav className="headerStyle">
          <ul>
          <button><NavLink to="/">Home</NavLink></button>
          <NavLink to="/cita">Place Order</NavLink>
          </ul>
    </nav>
   </div>
  );
}


export default Navigation;
