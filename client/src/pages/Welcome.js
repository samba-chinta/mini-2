import React from "react";
import { Link } from "react-router-dom";

import SideWrapper from "../components/UI/SideWrapper";
import Button from "../components/UI/Button";

import classes from "../styles/welcome.module.css";

const Welcome = (props) => {
  return (
    <main className={classes["content-wrapper"]}>
      <SideWrapper />
      <div className={classes["btns-wrapper"]}>
        <Button
          type="button"
          className={classes["auth-btns"]}
          value={<Link to="/signin">Sign In</Link>}
        />
        <Button
          type="button"
          className={classes["auth-btns"]}
          value={<Link to="/signup">Sign Up</Link>}
        />
      </div>
    </main>
  );
};

export default Welcome;
