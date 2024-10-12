import { useState } from "react";
import Images from "../../assets/images.jsx";
import { Menu, Nav, Logo, Navigation, UserNavigation, Line, UserPhoto, DropDown, DropdownMenu, DropdownItem, I } from "./NavBar.styles.js";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <>
      <Menu>
        <Nav>
            <Logo>LOGO</Logo>
            <Navigation>
              <UserNavigation >
                  <Line></Line>
                  <UserPhoto src={Images.UserPhoto} alt="Profile photo" width={30} height={30}/>
                  <label htmlFor="User Example">Jamyle Elen</label>
                  <DropDown><I onAbort={toggleDropdown} onClick={toggleDropdown} isOpen={dropdownOpen} className='bx bx-chevron-down' style={{ color: '#a0a0a0' }}></I></DropDown>
              </UserNavigation>
              {dropdownOpen && (
              <DropdownMenu>
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem>Log out</DropdownItem>
              </DropdownMenu>
            )}
            </Navigation>
        </Nav>
      </Menu>
    </>
  );
};

export default NavBar;
