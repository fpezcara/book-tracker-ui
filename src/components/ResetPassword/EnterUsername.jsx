import { useState } from "react";
import { resetPassword } from "../../utils/requests";

const EnterUsername = ({ setSuccessMessage, setErrorMessage }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

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
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setIsButtonDisabled(!e.target.value.length > 0)}
        type="email"
        name="email"
        placeholder="Email address"
      />
      <button type="submit" disabled={isButtonDisabled}>
        Continue
      </button>
    </form>
  );
};

export default EnterUsername;
