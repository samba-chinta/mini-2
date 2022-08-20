import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import classes from "../../styles/approveItem.module.css";

const ApproveItem = (props) => {
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
      <p className={classes["message"]}>
        {props.approvedUser} as approved your request to tag in your photo
        uploaded on {props.postDate}
      </p>
    </div>
  );
};

export default ApproveItem;
