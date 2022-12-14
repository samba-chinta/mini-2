import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

import { Alert, Snackbar } from "@mui/material";
import InputField from "../UI/InputField";
import Button from "../UI/Button";
import classes from "../../styles/form.module.css";
import ForgetPasswordPortal from "../Portals/ForgetPasswordPortal";
import { portalActions } from "../../store/portal-slice";
import { userActions } from "../../store/user-slice";

const LoginForm = (props) => {
  const dispatcher = useDispatch();
  const [status, setStatus] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const isPortalActive = useSelector((state) => state.portal.isActive);
  
  useEffect(() => {
    setTimeout(() => {
      setStatus({
        status: false,
        msg: "",
        type: "",
      });
    }, 6000);
  }, [status.status]);

  const user_email = useRef("");
  const user_password = useRef("");

  // const email_regex = new RegExp("^[\\w-\\.]+@[\\w-]+\\.+[\\w-]{2,4}$");

  const forgetPasswordLinkClickHandler = () => {
    dispatcher(portalActions.setActive());
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const email = user_email.current.value;
    const password = user_password.current.value;
    // if (!email_regex.test(email)) {
    //   setStatus({ status: true, msg: "Invalid Email Address", type: "error" });
    //   return;
    // }
    try {
      const res = await fetch("http://127.0.0.1:8000/signin", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",    
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const json = await res.json();
      localStorage.setItem("data", json.email);
      localStorage.setItem("loggedin", true);
      dispatcher(userActions.login(json));
    } catch (error) {
      setStatus({
        status: false,
        msg: "Login Failed",
        type: "failure",
      });
    }
  };

  return (
    <div className={classes["form-wrapper"]}>
      <form onSubmit={formSubmitHandler} className={classes["form"]}>
        {status.status && (
          <Snackbar open={status.status} autoHideDuration={6000}>
            <Alert severity={status.type}>{status.msg}</Alert>
          </Snackbar>
        )}
        <h2>Sign In</h2>
        <InputField type="email" placeholder="Email Address" ref={user_email} />
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
        {status.status === true && status.type === 'success' && (
          <Navigate to="/"/>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
