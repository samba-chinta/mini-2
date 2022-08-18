import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import InputField from "../UI/InputField";
import Button from "../UI/Button";
import classes from "../../styles/form.module.css";
import ForgetPasswordPortal from "../Portals/ForgetPasswordPortal";
import { portalActions } from "../../store/portal-slice";

const LoginForm = (props) => {
  const dispatcher = useDispatch();

  const isPortalActive = useSelector((state) => state.portal.isActive);

  const user_name = useRef("");
  const user_password = useRef("");

  const forgetPasswordLinkClickHandler = () => {
    dispatcher(portalActions.setActive());
  };

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
        <Button
          type="button"
          value="Forget Password? Reset"
          className={classes["link-btn"]}
          onClick={forgetPasswordLinkClickHandler}
        />
        <Link to="/signup">Don't Have an Account? SignUp</Link>
        {isPortalActive &&
          ReactDOM.createPortal(
            <ForgetPasswordPortal />,
            document.getElementById("forget-portal")
          )}
      </form>
    </div>
  );
};

export default LoginForm;
