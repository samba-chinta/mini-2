import React from "react";

import classes from "../../styles/button.module.css";

const Button = (props) => {
  const btn_classes = `${classes["btn"]} ${props.className}`;
  return (
    <button
      type={props.type}
      className={btn_classes}
      width={props.width}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.value}
    </button>
  );
};

export default Button;
