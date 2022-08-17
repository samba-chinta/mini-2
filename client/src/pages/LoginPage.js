import React from "react";

import SideWrapper from "../components/UI/SideWrapper";
import LoginForm from "../components/Forms/LoginForm";
import classes from "../styles/welcome.module.css";

const LoginPage = (props) => {
  return (
    <main className={classes["content-wrapper"]}>
      <SideWrapper />
      <div className={classes["btns-wrapper"]}>
        <LoginForm/>
      </div>
    </main>
  );
};

export default LoginPage;
