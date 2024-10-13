import styled from "styled-components";

export const MainContainer = styled.div`
    padding: 15vh 0 0 4vw; // GAGA LEGAL
    /* margin: 0 10rem; */
    /* border: red solid 1px; */
    background-color: #D9D9D9;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const UserProfileContent = styled.div`
    /* border: green solid 1px; */
    padding: 5vh;
    max-width: 1700px;
    background-color: #FFFFFF;
    width: 100%;
`

export const Profile = styled.div`
    /* border: yellow solid 1px; */
    display: flex;
    font-family: "Luckiest Guy", cursive;
    font-weight: 400;
    gap: 5rem;
    color: #2c2c2c;
`

export const Line = styled.div`
    width: 100%;
    border: 1px solid #D9D9D9;
    margin-top: 3rem;
`

export const About = styled.div`
    /* border: red solid 1px; */
`

export const Span = styled.div`
    /* border: purple solid 1px; */
    display: flex;
    align-items: center;
    gap: .2rem;
`

export const Icon = styled.i`
    font-size: 1.5rem;
`

export const Info = styled.div`
    display: flex;
    gap: 1rem;
`

export const Bio = styled.div`
    font-family: 'Poppins', sans-serif;
    padding: 1rem;
`

export const Location = styled.div`
    font-family: 'Poppins', sans-serif;
    /* font-size: 1.2rem; */
    /* border: blue solid 1px; */
    display: flex;
    align-items: center;
    gap: .2rem;
`

export const Edit = styled.i`
    border: solid 1px #D9D9D9;
    border-radius: 50%;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 2.4rem;
    cursor: pointer;
    transition: transform 0.4s ease, opacity 0.4s ease;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(360deg)' : 'rotate(0deg)')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0.5')};
`

export const Input = styled.input`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    height: 2rem;
    padding-left: .3rem;
`

export const DropdownMenu = styled.div`
  position: absolute;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  right: 24rem;
  background-color: white;
  border-radius: 10px 5px 10px 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  z-index: 100;
`;

export const DropdownItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #EEEFFF;
  }
`;

export const MainContent = styled.div`
    padding: 5vh 0 0 4vw; // GAGA LEGAL
    /* margin: 0 10rem; */
    /* border: purple solid 1px; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const UserProfileContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    /* border: green solid 1px; */
    padding: 5vh 5vw;
    max-width: 1700px;
    background-color: #FFFFFF;
    width: 100%;
`

export const FindOutMore = styled.h2`
    color: #828181;
    font-size: 1.5rem;
    margin-bottom: .5rem;
`

export const GroupSquare = styled.div`
    /* border: red solid 1px; */
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`

export const Square = styled.div`
    /* border: red solid 1px; */
    max-width: 230px;
    width: 13vw;
    max-height: 280px;
    height: 12vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    background-color: #D9D9D9;
    border-radius: 4px;
    transition: all .3s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.04);
    }
`

export const Graphics = styled.p`
    font-size: 1.3rem;
    font-weight: 600;
    color: #606060;
`

export const IconElements = styled.i`
    font-size: 5rem;
    color: #fff;
`

export const P = styled.p`
    font-size: 1rem;
    color: #606060;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Next = styled.i`
    font-size: 2rem;
`

export const Strong = styled.strong`
    margin-right: .5rem;
`
