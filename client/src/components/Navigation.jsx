import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

class Navigation extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
         collapse: false,
         isWideEnough: false,
     };
 this.onClick = this.onClick.bind(this);
 }

 onClick(){
     this.setState({
         collapse: !this.state.collapse,
     });
 }

 render() {
         return (
          
                 <Navbar color="indigo" dark expand="md" scrolling>

                     { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}

                         <NavbarNav left>
                           <NavItem active>
                               <NavLink to='/'>Home</NavLink>
                           </NavItem>
                           <NavItem>
                               <NavLink to='/registro'>Mi cuenta</NavLink>
                           </NavItem>
                           <NavItem>
                               <NavLink to='/Form'>Place Order</NavLink>
                           </NavItem>
                         </NavbarNav>

                 </Navbar>

         );
     }
 }

// render(){
//   return (
//     <div>
//     <Navbar className="form-inline" light color="green">
//
//       <ul className="nav md-tabs light-blue lighten-1 mx-0 mb-0 mt-1">
//       <button className="btn btn-elegant" type="button"><NavLink to='/'>Home</NavLink></button>
//       </ul>
//       <ul className="nav md-tabs light-blue lighten-1 mx-0 mb-0 mt-1">
//       <button className="btn btn-elegant" type="button"><NavLink to='/registro'>Mi cuenta</NavLink></button>
//       </ul>
//       <ul className="nav md-tabs light-blue lighten-1 mx-0 mb-0 mt-1">
//       <button className="btn btn-elegant" type="button"><NavLink to='/Form'>Place Order</NavLink></button>
//       </ul>
//
//   </Navbar>
//     </div>
//   )
// }
// }

export default Navigation;
