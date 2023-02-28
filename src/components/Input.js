import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const { label, name, type, value, handleChange, isValid, errorMessage } =
    props;

  return (
    <div className={classes["input-container"]}>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={handleChange} />
      {errorMessage && !isValid && (
        <p className={classes["error"]}>{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
