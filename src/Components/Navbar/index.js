import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';


const Navbar = () => {
  return (
    <>
       <Nav>
           <NavLink to ="/">
               <h1>Wave</h1>
           </NavLink>
           <Bars />
           <NavMenu>
               <NavLink to="/home" activeStyle>
                   Home
               </NavLink>
               <NavLink to="/profile" activeStyle>
                   Profile
               </NavLink>
               <NavLink to="/myTracks" activeStyle>
                   My Tracks
               </NavLink>
               <NavLink to="/cart" activeStyle>
                   Cart
               </NavLink>
           </NavMenu>
           <NavBtn>
               <NavBtnLink to="/signin">
                   Sign in
               </NavBtnLink>
           </NavBtn>
       </Nav>
    </>
  );
};

export default Navbar;