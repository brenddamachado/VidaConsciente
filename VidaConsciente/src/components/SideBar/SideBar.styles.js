import styled from "styled-components";

export const SideBarMenu = styled.div`
    /* border: red solid 1px; */
    z-index: 1;
    margin-top: 8vh;
    padding-top: 1rem;
    height: 92vh;
    width: 4vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #FFF;
    position: absolute;
`

export const LogOut = styled.div`
    /* border: green solid 1px; */

`

export const Option = styled.div`
    /* border: red solid 1px; */
    display: flex;
    flex-direction: column;

`

export const I = styled.i`
    /* border: green solid 1px; */
    font-size: 2rem;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: ${(props) => (props.isClicked ? '5px solid #3F46C8' : '2px solid transparent')};

    &:hover {
        cursor: pointer;
        background-color: #EEEFFF;
        /* background-color: #3F46C8; */
        transition: .2s all linear;

    }

`
