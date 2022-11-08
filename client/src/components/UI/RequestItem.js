import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import classes from "../../styles/approveItem.module.css";

const RequestItem = (props) => {
  const removeBtnHandler = (e) => props.removeItemFunc(props.id);

  return (
    <div className={classes["approve-wrapper"]}>
      <button
        className={classes["btn"]}
        title="Remove"
        onClick={removeBtnHandler}
      >
        <CloseIcon />
      </button>
      <form>
        <p className={classes["message"]}>
          {props.requestedUser} is posting an image containing you. Would you like to continue with it.
        </p>
        <button type="submit">Accept</button>
      </form>
    </div>
  );
};

export default RequestItem;
