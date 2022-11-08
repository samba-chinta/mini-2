import React, { useState, useEffect } from "react";
import axios from "axios";

import RequestItem from "../components/UI/RequestItem";
import classes from "../styles/approve.module.css";

const Request = (props) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/notifications", {
        params: { email: localStorage.getItem("data") },
      })
      .then((res) => setRequests(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={classes["wrapper"]}>
      <h2>Requests:</h2>
      {requests.length === 0 ? (
        <p>No Requests to Show</p>
      ) : (
        [...requests]
          .reverse()
          .map((approve) => (
            <RequestItem key={Math.random().toString()} msg={approve} />
          ))
      )}
    </div>
  );
};

export default Request;
