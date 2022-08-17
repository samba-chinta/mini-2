import React, { forwardRef } from "react";

import classes from "../../styles/inputfield.module.css";

const InputField = forwardRef((props, ref) => (
  <input
    type={props.type}
    placeholder={props.placeholder}
    ref={ref}
    className={classes["input-field"]}
  />
));

export default InputField;
