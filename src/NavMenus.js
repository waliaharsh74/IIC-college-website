import { CSSTransition } from "react-transition-group";

import "./NavMenus.css";
import CircleIcon from "@mui/icons-material/Circle";

// import { ReactComponent as BellIcon } from "./icons/bell.svg";
// import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
// import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";
import React, { useState, useEffect, useRef } from "react";

function NavMenus() {
  return (
    <Navbar>
      <div className="nav-text">Home</div>
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
      <div className="nav-text">Academics</div>
      <div className="nav-text">Admissions</div>
      <div className="nav-text">Departments</div>
      <div className="nav-text">Student@GKV</div>

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
      <div className="nav-text">Research</div>
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
      <div className="nav-text">Bodies</div>
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>

      <div className="nav-text">IQAC</div>
      <div className="nav-text">Placements</div>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav d-flex flex-row justify-content-end">
        {props.children}
      </ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

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
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="Campuses"
          >
            Campuses
          </DropdownItem>
          <div className="nav-text2">Vision and Mission</div>
          <div className="nav-text2">Organization Structure</div>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="administration"
          >
            Administration
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="AuthoritiesOfViv"
          >
            Authorities of Viv.
          </DropdownItem>
          <div className="nav-text2">How to reach</div>
          <div className="nav-text2"> Head and Deans</div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "Campuses"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Campuses</h2>
          </DropdownItem>

          <div className="nav-text3"> Main campus</div>
          <div className="nav-text2"> Kanya Gurukul Haridwar</div>
          <div className="nav-text4"> Kanya Gurukul Dehradun</div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "administration"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Administration</h2>
          </DropdownItem>
          <div className="nav-text3"> The Chancellor</div>
          <div className="nav-text3"> The Vice-Chancellor</div>
          <div className="nav-text3"> The Registrar</div>
          <div className="nav-text3"> The Finance Officer</div>
          <div className="nav-text3"> The controller of Examination</div>
          <div className="nav-text3"> Director IQAC</div>
          <div className="nav-text3"> Main campus</div>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "AuthoritiesOfViv"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Authorities ...</h2>
          </DropdownItem>
          <div className="nav-text3"> Finance Committee</div>
          <div className="nav-text3"> BOM members</div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default NavMenus;
