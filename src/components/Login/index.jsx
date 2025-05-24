import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router";
import {
  AuthenticationContainer,
  ErrorMessage,
  SmallText,
} from "../../styles/Authentication.style";
import { loginUser } from "../../utils/requests";

import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const currentBookList = Cookies.get("currentBookList") || "reading";
  const [errorMessage, setErrorMessage] = useState("");
  const userId = Cookies.get("userId");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const formValues = {
      email_address: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await loginUser({ ...formValues });

      if (response?.user_id) {
        Cookies.set("userId", response?.user_id);
        Cookies.get("currentBookList") ||
          Cookies.set("currentBookList", currentBookList);

        navigate(`/${currentBookList}`);
      }
    } catch (error) {
      console.error("Login failed:", error);
      if (error.status === 401) {
        setErrorMessage("Invalid email or password. Please try again.");
      }
    }
  };

  useEffect(() => {}, [userId]);

  return (
    <AuthenticationContainer>
      <div className="wrapper">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email address" />
          <input type="password" name="password" placeholder="Password" />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <button type="submit">Login</button>
        </form>
        <SmallText>
          Don't have an account? <Link to="/register">Register</Link>
        </SmallText>
        <SmallText>
          Don't remember your password?{" "}
          <Link to="/reset-password">Reset your password</Link>
        </SmallText>
      </div>
    </AuthenticationContainer>
  );
};

export default Login;
