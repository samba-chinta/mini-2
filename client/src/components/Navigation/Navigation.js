import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from "../../styles/navigation.module.css"

const Navigation = (props) => {
  return (
    <header>
      <h2>PhotoShare</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Friends</NavLink>
          </li>
          <li>
            <NavLink to="/">Requests</NavLink>
          </li>
          <li>
            <NavLink to="/">Approves</NavLink>
          </li>
          <li>
            <NavLink to="/">Logout</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation;