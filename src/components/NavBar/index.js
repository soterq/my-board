import React from 'react'
import {
     Nav,
     NavBarContainer,
     NavLogo,
     MobileIcon,
     NavMenue,
     NavItem,
     NavLinks
    } from './NavBarElements'
const NavBar = () => {
    return (
       <>
        <Nav>
            <NavBarContainer>
                <NavLogo to="/"> boartino </NavLogo>
                <MobileIcon>
                    <FaBar/>
                </MobileIcon>
                <NavMenue>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                </NavMenue>
            </NavBarContainer>
        </Nav>
       </>
    )
}

export default NavBar
