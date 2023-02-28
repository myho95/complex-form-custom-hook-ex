import { useCallback, useState } from "react";

const useForm = (formObj) => {
  const [form, setForm] = useState(formObj);

  const renderFormInputs = () => {
    return Object.values(form).map((inputObj) => {
      const { renderInput, label, value, errorMessage, valid } = inputObj;
      return renderInput(onInputChange, label, value, errorMessage, valid);
    });
  };

  const isInputFieldValid = useCallback(
    (inputField) => {
      for (const rule of inputField.validationRules) {
        if (!rule.validate(inputField.value, form)) {
          inputField.errorMessage = rule.message;
          return false;
        }
      }
      return true;
    },
    [form]
  );

  const onInputChange = useCallback(
    (event) => {
      console.log("Change running");

      const { name, value } = event.target;
      const inputObj = { ...form[name] };
      inputObj.value = value;
      const isValidInput = isInputFieldValid(inputObj);
      if (isValidInput && !inputObj.valid) {
        inputObj.valid = true;
      } else if (!isValidInput && inputObj.valid) {
        inputObj.valid = false;
      }
      inputObj.touched = true;
      setForm((prevForm) => {
        return { ...prevForm, [name]: inputObj };
      });
    },
    [form, isInputFieldValid]
  );

  const isFormValid = () => {
    let isValid = true;
    for (const field of Object.values(form)) {
      if (!field.valid) {
        isValid = false;
        break;
      }
    }
    return isValid;
  };

  return { renderFormInputs, isFormValid };
};

export default useForm;
