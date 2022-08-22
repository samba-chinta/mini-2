import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import InputField from "../UI/InputField";
import Button from "../UI/Button";
import classes from "../../styles/form.module.css";
import { Alert, Snackbar } from "@mui/material";

import useAuth from "../../hooks/useAuth";

const SignupForm = (props) => {
  const authApi = useAuth();
  const [status, setStatus] = useState({
    status: false,
    msg: "",
    type: "",
  });

  console.log(authApi.response);
  console.log(authApi.error);

  useEffect(() => {
    setTimeout(() => {
      setStatus({
        status: false,
        msg: "",
        type: "",
      });
    }, 6000);
  }, [status.status]);

  const user_name = useRef("");
  const user_password = useRef("");
  const user_confirm_password = useRef("");
  const user_email = useRef("");
  const user_phone = useRef("");
  const user_dob = useRef("");
  const user_gender = useRef("");

  const email_regex = new RegExp("^[\\w-\\.]+@[\\w-]+\\.+[\\w-]{2,4}$");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const name = user_name.current.value;
    const password = user_password.current.value;
    const confirmPswd = user_confirm_password.current.value;
    const email = user_email.current.value;
    const phone = user_phone.current.value;
    const gender = user_gender.current.value;
    const dob = user_dob.current.value;
    if (name.length < 6) {
      setStatus({
        status: true,
        msg: "UserName must be atleast 6 characters long",
        type: "error",
      });
      return;
    }
    if (password.length <= 8) {
      setStatus({
        status: true,
        msg: "Password must be atleast 8 characters long",
        type: "error",
      });
      return;
    }
    if (password !== confirmPswd) {
      setStatus({
        status: true,
        msg: "Password & Confirm Password must be same",
        type: "error",
      });
      return;
    }
    if (!email_regex.test(email)) {
      setStatus({ status: true, msg: "Invalid Email Address", type: "error" });
      return;
    }
    authApi.signup("http://127.0.0.1:5000/signup", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        email,
        password,
        dob,
        phone,
        gender
      })
    });
    setStatus({
      status: true,
      msg: "Successfully Account Created",
      type: "success",
    });
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
        <InputField
          type="text"
          placeholder="UserName (atleast length 6)"
          ref={user_name}
        />
        <InputField
          type="password"
          placeholder="Password (atleast length 8)"
          ref={user_password}
        />
        <InputField
          type="password"
          placeholder="Confirm Password"
          ref={user_confirm_password}
        />
        <InputField type="email" placeholder="Email Address" ref={user_email} />
        <InputField type="text" placeholder="Phone Number" ref={user_phone} />
        <div className={classes["dob-n-gender"]}>
          <label>
            Gender:
            <select ref={user_gender}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <InputField type="date" ref={user_dob} />
        </div>
        <Button type="submit" value="SignIn" className={classes["form-btn"]} />
        <Link to="/signin">Already Have an Account? SignIn</Link>
      </form>
    </div>
  );
};

export default SignupForm;
