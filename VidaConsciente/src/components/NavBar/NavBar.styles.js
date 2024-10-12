import styled from "styled-components";

export const Menu = styled.nav`
    /* border: red solid 1px; */
    background-color: #FFFFFF;
    z-index: 2;
    height: 8vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    position: absolute;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
`

export const Nav = styled.nav`
    /* border: red solid 1px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1800px;
    width: 100%;
    padding: 0 2rem;
    /* border: green solid 1px; */
    /* border: green solid 1px; */
`

export const Logo = styled.h1`
    font-size: 1rem;
    font-weight: 900;

    /* @media screen and (max-width: 768px) {
        font-size: .5rem;
    } */
`

export const Navigation = styled.div`
    display: flex;
    flex-direction: row;
`

// export const Theme = styled.nav`
//     /* border: red solid 1px; */
// `

export const UserNavigation = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    /* border: red solid 1px; */
`

export const Line = styled.div`
    height: 8vh;
    margin-right: 1rem;
    border: 1px solid #D9D9D9;
`

export const UserPhoto = styled.img`
    width: 30px;
    border-radius: 50%;
`

export const DropDown = styled.nav`
    /* border: red solid 1px; */
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const I = styled.i`
    /* border: red solid 1px; */
    font-size: 1.2rem;
`
