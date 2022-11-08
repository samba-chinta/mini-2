import React, { useState, useEffect } from "react";
import axios from "axios";

import CloseIcon from "@mui/icons-material/Close";
import classes from "../../styles/approveItem.module.css";

const RequestItem = (props) => {
  const [postId, setPostId] = useState()

  useEffect(() => {
    setPostId(props.msg.substr(-24))
  }, [])

  const removeBtnHandler = (e) => {
    axios.put("http://localhost:8000/remove-post", {
      id: postId,
      email: localStorage.getItem('data')
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/remove-notification", {
        email: localStorage.getItem("data"),
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes["approve-wrapper"]}>
      <button
        className={classes["btn"]}
        title="Remove"
        onClick={removeBtnHandler}
      >
        <CloseIcon />
      </button>
      <form onSubmit={formSubmitHandler}>
        <p className={classes["message"]}>{props.msg}</p>
        <button type="submit" >Accept</button>
      </form>
    </div>
  );
};

export default RequestItem;
