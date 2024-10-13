import React from 'react';
import Images from "../../assets/images.jsx";
import { Menu, LogoImage, Nav, Logo, Navigation, UserNavigation, Line, UserPhoto, DropDown, I } from "./NavBar.styles.js";
import "./NavBar.css";
import logo from "../../assets/images/dst.png";

const NavBar = () => {
  const fullName = localStorage.getItem('userName') || 'Usuário';
  const [firstName, lastName] = fullName.split(' '); 

  return (
    <Menu>
      <Nav>
      <LogoImage src={logo} alt="Logo" />
        <Navigation>
          <UserNavigation>
            <Line />
            <UserPhoto src={Images.UserPhoto} alt="Profile photo" width={30} height={30} />
            <label>{firstName} {lastName}</label> 
            <DropDown>
              <I className='bx bx-chevron-down' style={{ color: '#a0a0a0' }}></I>
            </DropDown>
          </UserNavigation>
        </Navigation>
      </Nav>
    </Menu>
  );
};

export default NavBar;
