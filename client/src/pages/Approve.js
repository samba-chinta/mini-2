import React, { useState } from "react";

import ApproveItem from "../components/UI/ApproveItem";
import classes from "../styles/approve.module.css";

const dummyData = [
  {
    id: '1',
    approvedUser: "samba",
    postDate: "2022/08/20",
  },
  {
    id: '2',
    approvedUser: "siva",
    postDate: "2022/08/19",
  },
  {
    id: '3',
    approvedUser: "gopi",
    postDate: "2022/08/20",
  },
];

const Approve = (props) => {
  const [approvals, setApprovals] = useState(dummyData);

  const removeAnApproveHandler = (id) => {
    const remApprovals = approvals.filter(value => value.id !== id);
    setApprovals(remApprovals);
  };

  return (
    <div className={classes["wrapper"]}>
      <h2>Approvals:</h2>
      {approvals.length === 0 ? (
        <p>No Approvals to Show</p>
      ) : (
        approvals.map((approve) => (
          <ApproveItem
            key={Math.random().toString()}
            {...approve}
            removeItemFunc={removeAnApproveHandler}
          />
        ))
      )}
    </div>
  );
};

export default Approve;
