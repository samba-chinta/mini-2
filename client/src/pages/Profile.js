import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";

//ICONS
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PasswordIcon from "@mui/icons-material/Password";
import PhoneIcon from "@mui/icons-material/Phone";
import CakeIcon from "@mui/icons-material/Cake";
import WcIcon from "@mui/icons-material/Wc";

import InputField from "../components/UI/InputField";
import Button from "../components/UI/Button";
import classes from "../styles/profile.module.css";

const Profile = (props) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const editFormHandler = () => setIsDisabled(!isDisabled);

  return (
    <div className={classes["profile-wrapper"]}>
      <div className={classes["profile-header"]}>
        <Avatar sx={{ bgcolor: "#00B172" }}>{props.username[0]}</Avatar>
        <p>{props.username}</p>
      </div>
      <form className={classes["profile-form"]}>
        <label className={classes["form-elements"]}>
          <PersonOutlineIcon />
          <InputField
            type="text"
            value={props.username}
            placeholder="Username"
            disabled={isDisabled}
          />
        </label>
        <label className={classes["form-elements"]}>
          <AlternateEmailIcon />
          <InputField
            type="email"
            value={props.email}
            placeholder="Email Address"
            disabled={isDisabled}
          />
        </label>
        <label className={classes["form-elements"]}>
          <PasswordIcon />
          <InputField
            type="password"
            value={props.password}
            placeholder="Password"
            disabled={isDisabled}
          />
        </label>
        <label className={classes["form-elements"]}>
          <PhoneIcon />
          <InputField
            type="text"
            value={props.phone}
            placeholder="Phone Number"
            disabled={isDisabled}
          />
        </label>
        <label className={classes["form-elements"]}>
          <CakeIcon />
          <InputField type="date" disabled={isDisabled} value={props.dob} />
        </label>
        <label className={classes["form-elements"]}>
          <WcIcon />
          <InputField
            type="text"
            disabled={isDisabled}
            value={props.gender}
            placeholder="Gender"
          />
        </label>
        <Button
          type="button"
          value={isDisabled ? "Edit" : "Cancel"}
          className={classes["form-btn"]}
          onClick={editFormHandler}
        />
        <Button
          type="submit"
          value="Update"
          className={classes["form-btn"]}
          disabled={isDisabled}
        />
      </form>
    </div>
  );
};

export default Profile;
