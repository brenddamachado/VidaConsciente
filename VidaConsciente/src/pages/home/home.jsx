import React from 'react';
import NavBarOut from '../../components/NavBarOut/navbarout.jsx';
import fundo from '../../assets/images/fundo.webp';
import './home.css';
import DiseaseCarousel from '../../components/DiseaseCards/DiseaseCards'; 
import NavBar from '../../components/NavBar/NavBar';
import Sidebar from '../../components/SideBar/SideBar.jsx'; // Corrigido para Sidebar com "S" maiúsculo

function Home() {

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <>
    
      {isLoggedIn ? (
        <>
          <NavBar /> 
          <Sidebar /> 
        </>
      ) : (
        <NavBarOut currentPage="home" />  
      )}

      <div className='home-container'>
        <div className='imgFundo'>
          <img src={fundo} alt="Fundo inicial" />
        </div>

        <div className='carousel-wrapper'>
          <DiseaseCarousel />
        </div>
      </div>
    </>
  );
}

export default Home;
