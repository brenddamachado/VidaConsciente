import { useLocation } from 'react-router-dom';
import { Menu, Nav, LogoImage, Navigation, UserNavigation, Line, StyledNavLink } from "./navbarout.js";
import "./navbarout.css";
import logo from "../../assets/images/dst.png";

const NavBarOut = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <Menu>
      <Nav>
        <LogoImage src={logo} alt="Logo" />
        <Navigation>
          <UserNavigation>
            <Line></Line>
            <div className="nav-links">

              {currentPath !== '/' && (
                <StyledNavLink to="/" exact activeClassName="active">
                  Home
                </StyledNavLink>
              )}


              {currentPath !== '/register' && (
                <StyledNavLink to="/register" activeClassName="active">
                  Cadastro
                </StyledNavLink>
              )}

              {!isLoggedIn && currentPath !== '/login' && (
                <StyledNavLink to="/login" activeClassName="active">
                  Login
                </StyledNavLink>
              )}
            </div>
          </UserNavigation>
        </Navigation>
      </Nav>
    </Menu>
  );
};

export default NavBarOut;
