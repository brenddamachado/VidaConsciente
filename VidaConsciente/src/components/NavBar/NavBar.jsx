import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Menu, LogoImage, Nav, Navigation, UserNavigation, Line, UserPhoto, DropDown, I } from "./NavBar.styles.js";
import logo from "../../assets/images/dst.png";
import male from "../../assets/images/male.png.jpg"; 
import female from "../../assets/images/female.jpg"; 

const NavBar = () => {
  const [nome, setNome] = useState('Usuário'); 
  const [genero, setGenero] = useState(''); 


  useEffect(() => {
    const pegarDadosUsuario = async () => {
      const userId = localStorage.getItem('userId');
      if (userId) {
        try {
          const resposta = await axios.get(`http://localhost:3000/api/getUser/${userId}`);
          setNome(resposta.data.name); 
          setGenero(resposta.data.gender); 
        } catch (error) {
          console.log("Erro ao buscar dados do usuário", error);
        }
      }
    };

    pegarDadosUsuario(); 
  }, []);

  
  const imagemPerfil = (genero === 'homem_cis' || genero === 'homem_transgenero') ? male : female;

  return (
    <Menu>
      <Nav>
        <LogoImage src={logo} alt="Logo" />
        <Navigation>
          <UserNavigation>
            <Line />
            <UserPhoto src={imagemPerfil} alt="Foto de perfil" width={30} height={30} />
            <label>{nome}</label>
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
