const createValidationRule = (name, message, validateFnc) => {
  return {
    name: name,
    message: message,
    validate: validateFnc,
  };
};

export const requiredRule = (inputName) => {
  const validateFnc = (inputValue, formObj) => inputValue.trim().length > 0;
  return createValidationRule("required", `${inputName} required`, validateFnc);
};

export const minLengthRule = (inputName, minLength) => {
  const validateFnc = (inputValue, formObj) =>
    inputValue.trim().length >= minLength;
  return createValidationRule(
    "minLength",
    `${inputName} should contain at least ${minLength} characters`,
    validateFnc
  );
};

export const maxLengthRule = (inputName, maxLength) => {
  const validateFnc = (inputValue, formObj) => inputValue.length <= maxLength;
  return createValidationRule(
    "maxLength",
    `${inputName} cannot contain more than ${maxLength} characters`,
    validateFnc
  );
};

export const passwordMatchRule = () => {
  const validateFnc = (inputValue, formObj) =>
    inputValue === formObj.password.value;
  return createValidationRule(
    "passwordMatch",
    "passwords do not match",
    validateFnc
  );
};
