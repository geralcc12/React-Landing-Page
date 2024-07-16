import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo,MobileIcon,NavMenu,NavItem,NavLinks} from './NavBarElements';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to='/'>dollar</NavLogo>
            <MobileIcon>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='anout'>About</NavLinks>
                </NavItem>
            </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
    
  )
}

export default Navbar