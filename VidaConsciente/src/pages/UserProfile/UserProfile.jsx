import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import maleAvatar from "../../assets/images/male.png.jpg";
import femaleAvatar from "../../assets/images/female.jpg";
import axios from 'axios';  
import { MainContainer, UserProfileContent, Profile, Line, About, 
  Icon, Info, Bio, Location, Edit, Input, MainContent, 
  UserProfileContainer, FindOutMore, GroupSquare, Square, Graphics, IconElements, 
  P, Next, DropdownMenu, DropdownItem } from './UserProfile.style.js'
import './UserProfile.css'

const UserProfile = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState(''); 

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const toggleEditMode = () => {
    if (isEditing) {
      saveProfile(); 
    }
    setIsEditing(!isEditing); 
  }

  const saveProfile = async () => {
    const userId = localStorage.getItem('userId'); 
    try {
      const response = await axios.put(`http://localhost:3000/api/updateUser/${userId}`, { 
        name,
        email,
        city  
      });
      console.log("Perfil atualizado com sucesso", response.data);
    } catch (error) {
      console.log("Erro ao atualizar o perfil:", error);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const userId = localStorage.getItem('userId'); 
    console.log("User ID:", userId);
    
    if (!userId) {
      console.error("User ID not found in localStorage.");
      window.location.href = "/login";
      return;
    }
  
    try {
      const response = await axios.get(`http://localhost:3000/api/getUser/${userId}`);
      console.log("Profile Response:", response.data);
      setName(response.data.name);
      setEmail(response.data.email);
      setCity(response.data.city);
      setGender(response.data.gender); 
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  }

  // imagem do avatar 
  const getAvatarImage = () => {
    if (gender === 'homem_cis' || gender === 'homem_transgenero') {
      return maleAvatar; 
    } else if (gender === 'mulher_cis' || gender === 'mulher_transgenero') {
      return femaleAvatar; 
    }
    return null; 
  };

  return (
    <>
      <NavBar/>
      <SideBar/>
      <MainContainer>
        <UserProfileContent>
            <Profile>
              <img src={getAvatarImage()} alt="Profile" />
              <About>
                
                <h1>{isEditing ? (
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  name
                )} <Icon className='bx bxs-check-circle' style={{color:'#73a66f'}} ></Icon></h1>
                

                <Info>
                  {isEditing ? (
                    <Input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  ) : (
                  <Location><i className='bx bx-current-location' style={{color:'#A0A0A0'}} ></i>
                  {city}</Location>
                  )}

                  {isEditing ? (
                    <Input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  ) : (
                  <Location><i className='bx bx-message' style={{color:'#A0A0A0'}} ></i>
                  {email}</Location> 
                  )}
                  <Location><i className='bx bx-check-circle' style={{color:'#A0A0A0'}} ></i>
                  Verify at 12/10/2021</Location>
                </Info>

                <Bio>
                  <i className='bx bxs-quote-left' style={{color:'#A0A0A0'}}></i>ﾠ
                  A saúde deve ser uma prioridade em nossas vidas. Quando nos conscientizamos sobre doenças, não apenas cuidamos de nós mesmos, mas também contribuímos para um mundo onde todos têm a chance de viver uma vida plena e saudável.
                  <i className='bx bxs-quote-left' style={{color:'#A0A0A0'}}></i>ﾠ

                </Bio>
              </About>

              <Edit onClick={toggleDropdown} className={isEditing ? 'bx bx-x' : 'bx bx-dots-vertical-rounded'} style={{color:'#000'}}></Edit>
              {dropdownOpen && (
                <DropdownMenu>
                  <DropdownItem onClick={toggleEditMode}>{isEditing ? 'Salvar' : 'Editar'}</DropdownItem>
                </DropdownMenu>
              )}
            </Profile>
            <Line></Line>
        </UserProfileContent>
      </MainContainer>

      <MainContent>
        <UserProfileContainer>
          <FindOutMore>SAIBA MAIS</FindOutMore>
          <GroupSquare>
            <Square>
              <Graphics>Gráficos</Graphics>
              <IconElements className='bx bx-objects-vertical-bottom' style={{color:'#fff'}}></IconElements>
              <P>Lorem ipsum <Next className='bx bx-right-arrow-alt' style={{color:'#606060'}} ></Next></P>
            </Square>
            <Square>
              <Graphics>Gráficos</Graphics>
              <IconElements className='bx bx-objects-vertical-bottom' style={{color:'#fff'}}></IconElements>
              <P>Lorem ipsum <Next className='bx bx-right-arrow-alt' style={{color:'#606060'}} ></Next></P>
            </Square>
            <Square>
              <Graphics>Gráficos</Graphics>
              <IconElements className='bx bx-objects-vertical-bottom' style={{color:'#fff'}}></IconElements>
              <P>Lorem ipsum <Next className='bx bx-right-arrow-alt' style={{color:'#606060'}} ></Next></P>
            </Square>
          </GroupSquare>
        </UserProfileContainer>
      </MainContent>
    </>
  );
};

export default UserProfile;
