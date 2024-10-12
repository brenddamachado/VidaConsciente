// import Images from "../../assets/images.jsx";
import { useState } from 'react'
import { SideBarMenu, LogOut, Option, I } from "./SideBar.styles.js"

const SideBar = () => {
    const [ isClicked, isSetClicked ] = useState(null)

    const handleClick = (id) => {
        isSetClicked(id)
    }
  return (
    <>
      <SideBarMenu>
            <Option><abbr title="Home"><I onClick={() => handleClick('home')} isClicked={isClicked === 'home'} className='bx bx-home-alt-2' style={{ color: '#a0a0a0' }}></I></abbr>
            <abbr title="Profile"><I onClick={() => handleClick('profile')} isClicked={isClicked === 'profile'} className='bx bx-user' style={{ color: '#a0a0a0' }}></I></abbr>
            <abbr title="Dashboard"><I onClick={() => handleClick('dashboard')} isClicked={isClicked === 'dashboard'} className='bx bxs-dashboard' style={{ color: '#a0a0a0' }}></I></abbr></Option>
        <LogOut>
        <Option><abbr title="Log out"><I className='bx bx-log-out' style={{ color: '#a0a0a0' }}></I></abbr></Option>
        </LogOut>
      </SideBarMenu>
    </>
  );
};

export default SideBar;
