import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BoltIcon from "@mui/icons-material/Bolt";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { Box} from "@mui/material";
import { useFunctions } from "../../context/FunctionsContext";
function NavBarDrop() {
    
    return (
        <Navbar>

      <NavItem  icon={<MenuIcon />}>
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

  const { openMenu,setOpenMenu } = useFunctions();
  return (
    <li className="nav-item">
      <a 
    //   href="#" 
      className="icon-button" onClick={() => setOpenMenu(!openMenu)}>
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
    titleSearch,
    gameSearch,
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
        href="#"
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
          <DropdownItem
                      leftIcon={<img src=  "https://res.cloudinary.com/dfpn73tnk/image/upload/v1660243740/profile1_xommge.png" alt="pic" style={{width:"46px"}} />}

          >My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<img src="https://res.cloudinary.com/dfpn73tnk/image/upload/v1660244156/game-console.256x184_wk8qbt.png" alt="pic" style={{width:"30px"}}/>}
          
            rightIcon={<ArrowForwardIosIcon />}
            goToMenu="consoles"
          >
            Consoles
          </DropdownItem>
          <DropdownItem
            leftIcon={<img src=  "https://res.cloudinary.com/dfpn73tnk/image/upload/v1660244156/option-2.256x256_lepq3r.png" alt="pic" style={{width:"30px"}}/>}
            rightIcon={<ArrowForwardIosIcon />}
            goToMenu="categories"
            
          >
            Categories
          </DropdownItem>

          <DropdownItem
            leftIcon={<img src=  "https://res.cloudinary.com/dfpn73tnk/image/upload/v1660244156/news-paper.256x256_ivbu1b.png" alt="pic" style={{width:"27px"}}/>}
          >
            <a href="https://www.gamespot.com/news/">News</a>
          </DropdownItem>
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
          <DropdownItem goToMenu="main" leftIcon={<ArrowBackIcon />}>
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
                 style={{}}><h4>{item.category}</h4></div>
              </DropdownItem>
            );
          })}
        </div>
      </CSSTransition>
    </Box>
  );
}

export default NavBarDrop;