import { useState, useEffect } from "react";
import Images from "../../assets/images.jsx";
import { Menu, Nav, Logo, Navigation, UserNavigation, Line, UserPhoto, DropDown, DropdownMenu, DropdownItem, I } from "./NavBar.styles.js";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    getProfile();
  });

  const getProfile = async () => {
    try {
      const response = await axios.get('coloca_aqui_a_rota_de_pegar_os_dados_joicy')
      // genero (genero é apenas para mudar a imagem de perfil conforme a escolha) IMPORTANTE: Verifica como vc pegou o dados no formulario, ali no campo ta como 'female' or 'male'
      name=response.data.name
      gender=response.data.gender
    } catch (error) {
      console.log(error)
    }
  }
  let name = 'User Example';
  let gender = 'female';
  return (
    <>
      <Menu>
        <Nav>
            <Logo>LOGO</Logo>
            <Navigation>
              <UserNavigation >
                  <Line></Line>
                  {gender === 'female' ? (
                    <UserPhoto src={Images.Female} alt="Profile photo" width={30} height={30}/>

                  ) : (
                    <UserPhoto src={Images.Male} alt="Profile photo" width={30} height={30}/>
                  )}

                  <label htmlFor="User Example">{name}</label>
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
