// import './index.css';
// import { ReactComponent as BellIcon } from './icons/bell.svg';
import NotificationsIcon from "@mui/icons-material/Notifications";
// import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import EmailIcon from "@mui/icons-material/Email";
// import { ReactComponent as CaretIcon } from './icons/caret.svg';
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import MenuIcon from "@mui/icons-material/Menu";
// import { ReactComponent as PlusIcon } from './icons/plus.svg';
import AddIcon from "@mui/icons-material/Add";
// import { ReactComponent as CogIcon } from './icons/cog.svg';
import SettingsIcon from "@mui/icons-material/Settings";
// import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { ReactComponent as ArrowBackIcon } from './icons/arrow.svg';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import BoltIcon from "@mui/icons-material/Bolt";

import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';

import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { Box, Button } from "@mui/material";
import { useFunctions } from "../../context/FunctionsContext";
import Link from "next/link";
function NavBarDrop() {
 
  return (
    <Navbar   
      >
      {/* <NavItem icon={<AddIcon />} />
      <NavItem icon={<NotificationsIcon />} />
      <NavItem icon={<EmailIcon />} /> */}
  
      <NavItem  icon={<MenuIcon />}  >
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const {openMenu,setOpenMenu}=useFunctions()
  // const [openMenu, setOpenMenu] = useState(false);

  return (
    <li className="nav-item"  >
      <a   className="icon-button"
       onClick={() => setOpenMenu(!openMenu)} 
     
    
      >
        {props.icon}
      </a>

      {openMenu && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  const {
    categories,
    categoryFiltering,
    consoleFiltering,
    consoles,
  } = useFunctions();

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {

    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        // href="#"
    
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <Box
      className="dropdown"
      sx={{ height: menuHeight * 1.04 }}
      ref={dropdownRef}
     
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<img src="/images/game-console.256x184.png" alt="pic" style={{width:"30px"}}/>}
            // leftIcon={< SportsEsportsOutlinedIcon style={{fontSize:'35px'}}/>}
            
            rightIcon={<ArrowForwardIosIcon />}
            goToMenu="consoles"
          >
            Consoles
          </DropdownItem>
          <DropdownItem
            leftIcon={<img src="/images/option-2.256x256.png" alt="pic" style={{width:"30px"}}/>}
            rightIcon={<ArrowForwardIosIcon />}
            goToMenu="categories"
          >
           
            Categories
          
            
          </DropdownItem>
          <DropdownItem
            leftIcon={<img src="/images/news-paper.256x256.png" alt="pic" style={{width:"28px"}}/>}
            // rightIcon={<ArrowForwardIosIcon />}
      
          >
        <Link href="https://www.gamespot.com/news/">
          <a className="news">News</a>
        </Link>
          </DropdownItem>


          {/* <DropdownItem
            leftIcon={<img src="/images/option-2.256x256.png" alt="pic" style={{width:"30px"}}/>}
            rightIcon={<ArrowForwardIosIcon />}
            goToMenu="categories"
          >
            Categories
          </DropdownItem> */}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "consoles"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowBackIcon />}>
            <h2><u>Consoles</u></h2>
          </DropdownItem>

          <DropdownItem value="All" leftIcon={<BoltIcon />}>
          <div onClick={(e,newValue) => {consoleFiltering("All")}}><h4>All</h4></div>
          </DropdownItem>

          {consoles?.map((item) => {
            return (
              <DropdownItem key={item.console} leftIcon={<BoltIcon />}>
                <div onClick={(e,newValue) => {consoleFiltering(item.console)}} >{item.console}</div>
                
              </DropdownItem>
            );
          })}

     
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "categories"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main"  leftIcon={<ArrowBackIcon />}>
            <h2><u>Categories</u></h2>
          </DropdownItem>
          <DropdownItem value="All" leftIcon={<BoltIcon />} >
                {/* <Button onClick={(e,newValue) => {categoryFiltering("All")}}  style={{backgroundColor:"inherit",color:"white",border:"0",marginLeft:"5px"}}>All</Button> */}
               <div onClick={(e,newValue) => {categoryFiltering("All")}}><h4>All</h4></div>
                
              </DropdownItem>
          {categories?.map((item) => {
          
            return (
              <DropdownItem key={item.category} leftIcon={<BoltIcon />} >
                <div onClick={(e,newValue) => {categoryFiltering(item.category)}} 
                 ><h4>{item.category}</h4></div>
              </DropdownItem>
            );
          })}
        </div>
      </CSSTransition>
    </Box>
  );
}

export default NavBarDrop;
