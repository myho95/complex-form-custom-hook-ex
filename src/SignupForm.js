import useForm from "./hooks/use-form";
import "./SignupForm.css";
import { signupForm } from "./utils/formConfig";

function SignupForm() {
  const { renderFormInputs, isFormValid } = useForm(signupForm);

  return (
    <form className="signupForm">
      <h1>Sign Up</h1>
      {renderFormInputs()}
      <div className="signup">
        <button type="submit" disabled={!isFormValid()}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
