import React from "react";
import { Link } from "react-router-dom";

import classes from '../styles/pagenotfound.module.css';

const PageNotFound = (props) => {
  return (
    <div className={classes['wrapper']}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to="/">Click Here to return Home Page</Link>
    </div>
  )
}

export default PageNotFound;