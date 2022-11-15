import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


const Navbar = () => {
  return (
    <>
    <Nav>
        <NavLink className="" to ="/">
               <h1>Wave</h1>
           </NavLink>
           
        <SignedInLinks/>
        <SignedOutLinks/>
        </Nav>

    </>
       
  );
};




export default Navbar;