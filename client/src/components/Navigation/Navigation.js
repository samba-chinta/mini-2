import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "../../styles/navigation.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navigation = (props) => {
  const [isNavOpened, setIsNavOpened] = useState(false);
  const isMobile = window.innerWidth < 750? true: false;

  const navBtnClickHandler = () => {
    setIsNavOpened((prevState) => !prevState);
  };

  return (
    <header className={classes["nav-header"]}>
      <h2>PhotoShare</h2>
      <button
        className={classes["mobile-nav__toggler"]}
        onClick={navBtnClickHandler}
      >
        {!isNavOpened ? <MenuIcon /> : <CloseIcon />}
      </button>
      <nav
        className={`${classes["nav"]} ${
          !isNavOpened && isMobile ? classes["nav-toggler"] : ""
        }`}
      >
        <ul className={classes["nav-list"]}>
          <li className={classes["nav-item"]}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={classes["nav-item"]}>
            <NavLink to="/friends">Friends</NavLink>
          </li>
          <li className={classes["nav-item"]}>
            <NavLink to="/requests">Requests</NavLink>
          </li>
          <li className={classes["nav-item"]}>
            <NavLink to="/approves">Approves</NavLink>
          </li>
          <li className={classes["nav-item"]}>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li className={classes["nav-item"]}>
            <NavLink to="/logout">Logout</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
