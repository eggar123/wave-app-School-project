import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import handleLogout from '../Account';

const SignedInLinks = () => {
  return (
    <>
           
           <NavMenu>
               <NavLink to="/profile" activeStyle>
                   Profile
               </NavLink>
               <NavLink to="/myTracks" activeStyle>
                   My Tracks
               </NavLink>
               <NavLink to="/cart" activeStyle>
                   Cart
               </NavLink>
               <NavLink to="/settings" activeStyle>
                   Settings
               </NavLink>
           </NavMenu>
           <NavBtn>
               <NavBtnLink onClick={handleLogout} to='/'>
                   Sign Out
               </NavBtnLink>
           </NavBtn>
       
    </>
  );
};

export default SignedInLinks;