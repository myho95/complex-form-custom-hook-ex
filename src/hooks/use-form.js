import { useCallback, useState } from "react";

const useForm = (formObj) => {
  const [form, setForm] = useState(formObj);

  const renderFormInputs = () => {
    return Object.values(form).map((inputObj) => {
      const { renderInput, label, value, errorMessage, valid, touched } =
        inputObj;
      return renderInput(
        onInputChange,
        onInputBlur,
        label,
        value,
        errorMessage,
        valid,
        touched
      );
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

  const onInputBlur = useCallback(
    (e) => {
      const { name } = e.target;
      const inputObj = { ...form[name] };

      // update blur status
      inputObj.touched = true;
      // check validation rules
      inputObj.valid = isInputFieldValid(inputObj);

      setForm((prevForm) => {
        return { ...prevForm, [name]: inputObj };
      });
    },
    [form, isInputFieldValid]
  );

  const onInputChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      const inputObj = { ...form[name] };

      // update value
      inputObj.value = value;
      // check validation rules
      inputObj.valid = isInputFieldValid(inputObj);

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
