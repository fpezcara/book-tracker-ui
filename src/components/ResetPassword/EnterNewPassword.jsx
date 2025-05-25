import { useState } from "react";
import { updatePassword } from "../../utils/requests";

const EnterNewPassword = ({ token, setSuccessMessage, setErrorMessage }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const formValues = {
      password: formData.get("password"),
      password_confirmation: formData.get("password_confirmation"),
    };
    console.log("Form Values:", formValues);
    if (formValues.password === formValues.password_confirmation) {
      updatePassword({ token, ...formValues })
        .then((response) => {
          console.log("Password reset email sent successfully:", response);
          setSuccessMessage(response.message);
        })
        .catch((error) => {
          console.error("Error sending password reset email:", error);
          if (error.status === 404) {
            setErrorMessage("Email address not found. Please try again.");
          } else {
            setErrorMessage(error.error);
          }
        });
    } else {
      setErrorMessage("Passwords do not match. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setIsButtonDisabled(!e.target.value.length > 0)}
        type="password"
        name="password"
        placeholder="Password"
      />
      <input
        onChange={(e) => setIsButtonDisabled(!e.target.value.length > 0)}
        type="password"
        name="password_confirmation"
        placeholder="Password Confirmation"
      />

      <button type="submit" disabled={isButtonDisabled}>
        Continue
      </button>
    </form>
  );
};

export default EnterNewPassword;
