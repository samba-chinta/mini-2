import React from "react";

import classes from '../../styles/card.module.css';

const Card = (props) => {
  const classname = `${classes['card']} ${props.className}`;
  return (
    <div className={classname}>{props.children}</div>
  )
}

export default Card;