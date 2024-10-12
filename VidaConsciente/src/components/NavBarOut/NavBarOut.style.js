import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const Menu = styled.nav`
  background-color: #FFFFFF;
  z-index: 2;
  height: 8vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1800px;
  width: 100%;
  padding: 0 2rem;
`;

export const Logo = styled.h1`
  font-size: 1;
  font-weight: 900;
`;

export const Navigation = styled.div`
  display: flex;
  gap: 2rem;
`;

export const UserNavigation = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const Line = styled.div`
  height: 8vh;
  border: 1px solid #D9D9D9;
`;

export const StyledNavLink = styled(RouterNavLink)`
  text-decoration: none;
  color: black; 
  font-weight: bold;
  font-size: 1rem;
  margin-right: 10px;

  &.active {
    color: black; 
    text-decoration: underline; 
  }

  &:hover {
    color: black; 
  }
`;

