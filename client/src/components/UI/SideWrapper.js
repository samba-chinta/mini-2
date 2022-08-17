import React from "react";

import classes from "../../styles/sideWrapper.module.css";

const SideWrapper = (props) => {
  return (
    <div className={classes['wrapper']}>
      <h1 className={classes['title']}>PhotoShare</h1>
      <p className={classes['caption']}>Connect to the World!</p>
    </div>
  )
}

export default SideWrapper;