import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import Images from "../../assets/images.jsx";
import { MainContainer, UserProfileContent, Profile, Line, About, Span, Icon, Info, Bio, Location, Strong, Edit, MainContent, UserProfileContainer, FindOutMore, GroupSquare, Square, Graphics, IconElements, P, Next, DropdownMenu, DropdownItem} from './UserProfile.styles'

const UserProfile = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }
  return (
    <>
      <NavBar/>
      <SideBar/>
      <MainContainer>
        <UserProfileContent>
            <Profile>
                <img src={Images.UserPhoto} alt="Profile photo" />
                <About>
                    <Span>
                      <h1>User Example</h1>
                      <Icon className='bx bxs-check-circle' style={{color:'#73a66f'}}  ></Icon>
                    </Span>
                    
                    <Info>
                      <Location><i className='bx bx-current-location' style={{color:'#A0A0A0'}} ></i>
                      Recife</Location> {/* DATA */}
                      <Location><i className='bx bx-message' style={{color:'#A0A0A0'}} ></i>
                      userexample@gmail.com</Location> {/* DATA */}
                      <Location><i className='bx bx-check-circle' style={{color:'#A0A0A0'}} ></i>
                      Verify at 12/10/2021</Location> {/* DATA */}
                    </Info>

                    <Bio>
                    <i className='bx bxs-quote-left' style={{color:'#A0A0A0'}}></i>ﾠ
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui illum asperiores, dolore blanditiis aliquid ratione, quos sequi dolores saepe tempore, corrupti iste eos. Sed et esse debitis, nostrum, voluptatibus vero nobis possimus, vitae omnis ipsam illum?
                    ﾠ<i class='bx bxs-quote-right' style={{color:'#A0A0A0'}} ></i>
                    </Bio>

                    <Location>
                      <p>Gender: <Strong>Female</Strong></p> {/* DATA */}
                      <p>Sexual Orientation: <Strong>Heterosexual</Strong></p> {/* DATA */}
                    </Location>

                </About>
                {/* aqui vai ficar o editar */}
                <Edit onClick={toggleDropdown} isOpen={dropdownOpen} className={dropdownOpen ? 'bx bx-x' : 'bx bx-dots-vertical-rounded'} style={{color:'#D9D9D9'}}></Edit>
                {dropdownOpen && (
                  <DropdownMenu>
                    <DropdownItem>Editar</DropdownItem>
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
            <Square>
              <Graphics>Gráficos</Graphics>
              <IconElements className='bx bx-objects-vertical-bottom' style={{color:'#fff'}}></IconElements>
              <P>Lorem ipsum <Next className='bx bx-right-arrow-alt' style={{color:'#606060'}} ></Next></P>
            </Square>
            <Square>

              <abbr title="Não é possivel adicionar mais itens">
                <IconElements className='bx bx-cross' style={{color:'#606060'}}></IconElements>
              </abbr>

            </Square>
          </GroupSquare>
          </UserProfileContainer>
          </MainContent>

    </>
  );
};

export default UserProfile;
