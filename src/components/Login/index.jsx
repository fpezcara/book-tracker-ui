import React from "react";
import { useNavigate } from "react-router";
import { AuthenticationContainer } from "../../styles/Authentication.style";
import { API_URL } from "../../constants";

import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const formValues = {
      email_address: formData.get("email"),
      password: formData.get("password"),
    };

    axios
      .post(
        `${API_URL}/session`,
        { session: formValues },
        {
          headers: {
            "Content-Type": "application/json",
            widthCredentials: true,
          },
        },
      )
      .then((response) => {
        if (response.status === 200 || response.status === 204) {
          navigate("/");
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <AuthenticationContainer>
      <div className="wrapper">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email address" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </AuthenticationContainer>
  );
};

export default Login;
