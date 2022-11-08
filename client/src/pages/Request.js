import React, { useState } from "react";

import RequestItem from "../components/UI/RequestItem";
import classes from "../styles/approve.module.css";

const dummyData = [
  {
    id: '1',
    requestedUser: "mohit",
  },
  {
    id: '2',
    requestedUser: "samba",
  },
];

const Request = (props) => {
  const [requests, setRequests] = useState(dummyData);

  const removeAnApproveHandler = (id) => {
    const remApprovals = requests.filter(value => value.id !== id);
    setRequests(remApprovals);
  };

  return (
    <div className={classes["wrapper"]}>
      <h2>Requests:</h2>
      {requests.length === 0 ? (
        <p>No Requests to Show</p>
      ) : (
        requests.map((approve) => (
          <RequestItem
            key={Math.random().toString()}
            {...approve}
            removeItemFunc={removeAnApproveHandler}
          />
        ))
      )}
    </div>
  );
};

export default Request;
