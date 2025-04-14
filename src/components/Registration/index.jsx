import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { registerUser } from "../../utils/requests";

import Cookies from "js-cookie";

import {
  AuthenticationContainer,
  EmailTakenErrorMessage,
  RegistrationForm,
} from "../../styles/Authentication.style";

const Registration = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const formValues = {
      email_address: formData.get("email"),
      password: formData.get("password"),
      password_confirmation: formData.get("password-confirmation"),
    };

    try {
      const response = await registerUser({ ...formValues });

      Cookies.set("userId", response?.user_id);
      Cookies.get("currentBookList") ||
        Cookies.set("currentBookList", "reading");

      navigate("/");
    } catch (error) {
      if (
        error?.message?.includes(
          "Validation failed: Email address has already been taken",
        )
      ) {
        setErrorMessage(
          "The email address is already in use. Please choose a different email.",
        );
      } else if (
        error?.message?.includes(
          "Validation failed: Password confirmation doesn't match Password",
        )
      ) {
        setErrorMessage(
          "Password and password confirmation do not match. Please try again.",
        );
      } else {
        setErrorMessage(
          "An error occurred during registration. Please try again.",
        );
      }
    }
  };

  useEffect(() => {}, [navigate]);

  return (
    <AuthenticationContainer>
      <div className="wrapper">
        <h2>Register</h2>
        <RegistrationForm onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email address" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="password-confirmation"
            placeholder="Password Confirmation"
          />
          {errorMessage && (
            <EmailTakenErrorMessage>{errorMessage}</EmailTakenErrorMessage>
          )}
          <button type="submit">Register</button>
        </RegistrationForm>
      </div>
    </AuthenticationContainer>
  );
};

export default Registration;
