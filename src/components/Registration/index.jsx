import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { API_URL } from "../../constants";

import { AuthenticationContainer } from "../../styles/Authentication.style";

const Registration = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const formValues = {
      email_address: formData.get("email"),
      password: formData.get("password"),
      password_confirmation: formData.get("password-confirmation"),
    };

    axios
      .post(`${API_URL}/users`, {
        user: formValues,
      })
      .then((response) => {
        // todo : i can't see the cookie, but i need to store that so i can make reqeusts to the api
        if (response.status === 201) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <AuthenticationContainer>
      <div className="wrapper">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email address" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="password-confirmation"
            placeholder="Password Confirmation"
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </AuthenticationContainer>
  );
};

export default Registration;
