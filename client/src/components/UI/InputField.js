import React, { forwardRef } from "react";

import classes from "../../styles/inputfield.module.css";

const InputField = forwardRef((props, ref) => (
  <input
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    ref={ref}
    disabled={props.disabled? true: false}
    className={classes["input-field"]}
  />
));

export default InputField;
