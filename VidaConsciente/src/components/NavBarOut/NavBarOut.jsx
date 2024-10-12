import { useLocation } from 'react-router-dom';
import { Menu, Nav, Logo, Navigation, UserNavigation, Line, StyledNavLink } from "./NavBarOut.style.js";
import "./NavBarOut.css";

const NavBar = () => {
  const location = useLocation();

  const isOnRegisterPage = location.pathname === '/register';

  return (
    <Menu>
      <Nav>
        <Logo>LOGO</Logo>
        <Navigation>
          <UserNavigation>
            <Line></Line>
            <div className="nav-links">
              <StyledNavLink to="/" exact activeClassName="active">Home</StyledNavLink>
              {isOnRegisterPage ? (
                <StyledNavLink to="/login" activeClassName="active">Login</StyledNavLink>
              ) : (
                <StyledNavLink to="/register" activeClassName="active">Cadastro</StyledNavLink>
              )}
            </div>
          </UserNavigation>
        </Navigation>
      </Nav>
    </Menu>
  );
};

export default NavBar;
