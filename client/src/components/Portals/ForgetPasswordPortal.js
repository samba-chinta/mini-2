import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { portalActions } from "../../store/portal-slice";

import InputField from "../UI/InputField";
import Button from "../UI/Button";
import classes from "../../styles/form.module.css";
import styles from "../../styles/portal.module.css";

const ForgetPasswordPortal = (props) => {
  const dispatcher = useDispatch();

  const user_email = useRef("");
  const user_new_password = useRef("");

  const portalTogglingHandler = () => {
    dispatcher(portalActions.setActive());
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(user_email.current.value);
    console.log(user_new_password.current.value);
  };

  return (
    <div className={`${classes["form-wrapper"]} ${styles["form-wrapper"]}`}>
      <form onSubmit={formSubmitHandler} className={classes["form"]}>
        <h2>Reset Password</h2>
        <InputField type="email" placeholder="Email Address" ref={user_email} />
        <InputField
          type="password"
          placeholder="New Password"
          ref={user_new_password}
        />
        <Button
          type="submit"
          value="Reset Password"
          className={classes["form-btn"]}
        />
        <Button
          type="button"
          value="close"
          className={classes["form-btn"]}
          onClick={portalTogglingHandler}
        />
      </form>
    </div>
  );
};

export default ForgetPasswordPortal;
