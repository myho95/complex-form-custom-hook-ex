import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const {
    label,
    name,
    type,
    value,
    handleChange,
    isValid,
    errorMessage,
    handleBlur,
    isTouched,
  } = props;

  return (
    <div className={classes["input-container"]}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {!isValid && isTouched && (
        <p className={classes["error"]}>{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
