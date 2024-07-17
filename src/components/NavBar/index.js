import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, 
   NavbarContainer,
   NavLogo,
   MobileIcon,
   NavMenu,
   NavItem,
   NavLinks,
   NavBtnLink,
   NavBtn
  } from './NavBarElements'; 


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to='/'>dolla</NavLogo>
            <MobileIcon>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='about'>About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='discover'>Discover</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='services'>services</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='signup'>sign up</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar