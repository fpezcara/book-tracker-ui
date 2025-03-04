import React from "react";
import { AuthenticationContainer } from "../../styles/Authentication.style";

const Registration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const formValues = {
      email: formData.get("email"),
      password: formData.get("password"),
      passwordConfirmation: formData.get("password-confirmation"),
    };

    console.log(formValues);
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
