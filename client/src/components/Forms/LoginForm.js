import React, { useRef } from "react";
import { Link } from "react-router-dom";

import InputField from "../UI/InputField";
import Button from "../UI/Button";
import classes from "../../styles/form.module.css";

const LoginForm = (props) => {
  const user_name = useRef("");
  const user_password = useRef("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(user_name.current.value);
    console.log(user_password.current.value);
  };

  return (
    <div className={classes["form-wrapper"]}>
      <form onSubmit={formSubmitHandler} className={classes["form"]}>
        <h2>Sign In</h2>
        <InputField type="text" placeholder="UserName" ref={user_name} />
        <InputField
          type="password"
          placeholder="Password"
          ref={user_password}
        />
        <Button type="submit" value="SignIn" className={classes["form-btn"]} />
        <Link to="/">Forget Password? Reset</Link>
        <Link to="/signup">Don't Have an Account? SignUp</Link>
      </form>
    </div>
  );
};

export default LoginForm;
