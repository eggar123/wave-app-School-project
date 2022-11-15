import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';


const SignedOutLinks = () => {
  return (
    <>
       
           <NavBtn>
               <NavBtnLink to='./Signin'>
                   Sign in
               </NavBtnLink>
           </NavBtn>
       
    </>
  );
};

export default SignedOutLinks;