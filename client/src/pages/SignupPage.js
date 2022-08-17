import React from "react";

import SideWrapper from "../components/UI/SideWrapper";
import SignupForm from "../components/Forms/SignupForm";
import classes from "../styles/welcome.module.css";

const SignupPage = (props) => {
  return (
    <main className={classes["content-wrapper"]}>
      <SideWrapper />
      <div className={classes["btns-wrapper"]}>
        <SignupForm/>
      </div>
    </main>
  );
};

export default SignupPage;
