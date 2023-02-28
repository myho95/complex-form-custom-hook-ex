import React from "react";
import Input from "../components/Input";
import {
  requiredRule,
  minLengthRule,
  maxLengthRule,
  passwordMatchRule,
} from "./inputValidationRules";

const createFormFieldsConfig = (label, name, type, defaultValue = "") => {
  return {
    renderInput: (
      handleChange,
      handleBlur,
      key,
      value,
      error,
      isValid,
      isTouched
    ) => {
      return (
        <Input
          key={key}
          label={label}
          name={name}
          type={type}
          value={value}
          handleChange={handleChange}
          isValid={isValid}
          handleBlur={handleBlur}
          isTouched={isTouched}
          errorMessage={error}
        />
      );
    },
    label,
    value: defaultValue,
    touched: false,
    valid: false,
    errorMessage: "",
  };
};

export const signupForm = {
  name: {
    ...createFormFieldsConfig("Full Name", "name", "text"),
    validationRules: [
      requiredRule("name"),
      minLengthRule("name", 3),
      maxLengthRule("name", 25),
    ],
  },
  email: {
    ...createFormFieldsConfig("Email", "email", "email"),
    validationRules: [
      requiredRule("email"),
      minLengthRule("email", 10),
      maxLengthRule("email", 25),
    ],
  },
  password: {
    ...createFormFieldsConfig("Password", "password", "password"),
    validationRules: [
      requiredRule("password"),
      minLengthRule("password", 8),
      maxLengthRule("password", 20),
    ],
  },
  confirmPassword: {
    ...createFormFieldsConfig(
      "Confirm Password",
      "confirmPassword",
      "password"
    ),
    validationRules: [passwordMatchRule()],
  },
};
