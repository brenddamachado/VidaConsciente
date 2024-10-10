import Images from "../../assets/images.jsx";
import { Menu, Nav, Logo, Navigation, UserNavigation, Line, UserPhoto, DropDown, I } from "./NavBar.styles.js";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Menu>
        <Nav>
            <Logo>LOGO</Logo>
            <Navigation>
              {/* <Theme><img src={Images.Sum} alt="Dark Mode" width={30}/>
              </Theme> */}
              {/* dark mode */}
              <UserNavigation>
                  <Line></Line>
                  <UserPhoto src={Images.UserPhoto} alt="Profile photo" width={30} height={30}/>
                  <label htmlFor="User Example">Jamyle Elen</label>
                  <DropDown><I className='bx bx-chevron-down' style={{ color: '#a0a0a0' }}></I>                  </DropDown> {/* span */}
              </UserNavigation>
            </Navigation>

        </Nav>
      </Menu>
    </>
  );
};

export default NavBar;
