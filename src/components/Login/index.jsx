import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthenticationContainer } from "../../styles/Authentication.style";
import { loginUser } from "../../utils/requests";

import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const currentBookList = Cookies.get("currentBookList") || "reading";
  const [error, setError] = useState("");

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
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {}, [Cookies.get("userId")]);

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
