import { useState } from "react";
import {
  AuthenticationContainer,
  SuccessMessage,
  ErrorMessage,
} from "../../styles/Authentication.style";
import { resetPassword } from "../../utils/requests";

const ResetPassword = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const formValues = {
      email_address: formData.get("email"),
    };

    resetPassword({ ...formValues })
      .then((response) => {
        console.log("Password reset email sent successfully:", response);
        setSuccessMessage(response.message);
        // Optionally, redirect or show a success message
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error);
        if (error.status === 404) {
          setErrorMessage("Email address not found. Please try again.");
        } else {
          setErrorMessage(
            "An unexpected error occurred. Please try again later.",
          );
        }
      });
  };

  return (
    <AuthenticationContainer>
      <div className="wrapper">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setIsButtonDisabled(!e.target.value.length > 0)}
            type="email"
            name="email"
            placeholder="Email address"
          />
          <SuccessMessage>{successMessage}</SuccessMessage>
          <ErrorMessage>{errorMessage}</ErrorMessage>
          {/* <input type="password" name="password" placeholder="Password" />
          <input type="password" name="password-confirmation" placeholder="Password Confirmation" /> */}
          <button type="submit" disabled={isButtonDisabled}>
            Continue
          </button>
        </form>
      </div>
    </AuthenticationContainer>
  );
};

export default ResetPassword;
