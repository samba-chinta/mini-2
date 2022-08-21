import React, { useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "../../styles/dragndrop.module.css";

const DragNDropField = (props) => {
  const file = useRef();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(file);
  };
  return (
    <div className={classes["field-wrapper"]}>
      <div className={classes['field']}>
        <form className={classes["form"]} onSubmit={formSubmitHandler}>
          <input
            type="file"
            className={classes["file-field"]}
            ref={file}
            multiple={true}
          />
          <Button
            type="submit"
            value="Upload"
            className={classes["form-btn"]}
          />
        </form>
      </div>
    </div>
  );
};

export default DragNDropField;
