import styled from "styled-components";
import { IoEye } from 'react-icons/io5';

export const DashboardContainer = styled.div`
  font-family: 'Arial', sans-serif;
  background: #f6f6f6;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  gap: 2rem;
  flex-direction: column;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const EyeIcon = styled(IoEye)`
    font-size: 2rem; /* Aumenta o tamanho do ícone */
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    
    &:hover {
        transform: scale(1.1); /* Efeito de aumento ao passar o mouse */
    }
`;
export const Reminders = styled.div`
  width: 100%;
  padding: 2rem 8rem 1rem;
`;

export const DashboardSecondGrid = styled.div`
  width: 100%;
  justify-content: space-evenly;
  padding: 4rem 0 0 0;
  display: flex;
`;

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  width: 100%;
  font-size: 12px;
  gap: 1rem;
`;

export const Select = styled.select`
  border: none;
  border-radius: 5px;
  padding: 2px 0 2px 7px;
  cursor: pointer;
`;

export const Option = styled.option`
  cursor: pointer;
`;

export const ChartsContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const ChartBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    padding: 35px 15px;
    width: 350px;
    height: 350px;
    background: #eaeaea;
    border-radius: 15px;
`;

export const ChartBoxHeading = styled.h3`
  text-align: center;
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 14px;
`;

export const AppContainer = styled.div`
  padding: 0px 15px;
  width: 350px;
  height: 350px;
  background: #eaeaea;
  border-radius: 15px;
`;

export const AppHeading = styled.h1`
  text-align: center;
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: 10px;
  font-size: 14px;
`;

export const LeafletContainer = styled.div`
  height: 280px !important;
  width: 100%;
  position: relative;
  outline-style: none;
  border-radius: 8px;
`;

export const MapContainerStyled = styled.div`
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 auto;
`;
