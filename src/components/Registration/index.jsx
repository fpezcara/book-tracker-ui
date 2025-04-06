import { useState } from "react";
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

    registerUser({ ...formValues })
      .then((response) => {
        Cookies.set("userId", response?.user_id);
        Cookies.get("currentBookList") ||
          Cookies.set("currentBookList", "reading");
        navigate("/");
      })
      .catch((error) => {
        if (
          error.response?.status === 400 &&
          error.response?.data?.message.includes(
            "Email address has already been taken",
          )
        ) {
          setErrorMessage(
            "Email address has already been taken. Please try again.",
          );
        } else {
          console.error(error);
        }
      });
  };

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
