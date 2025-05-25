import { useState, useEffect } from "react";
import {
  AuthenticationContainer,
  SuccessMessage,
  ErrorMessage,
} from "../../styles/Authentication.style";
import { useSearchParams } from "react-router";
import EnterUsername from "./EnterUsername";
import EnterNewPassword from "./EnterNewPassword";

const ResetPassword = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState("");

  const [searchParams] = useSearchParams();

  useEffect(() => {
    setToken(searchParams.get("token") || "");
  }, [searchParams]);

  return (
    <AuthenticationContainer>
      <div className="wrapper">
        <h2>Reset Password</h2>
        {token ? (
          <EnterNewPassword
            setSuccessMessage={setSuccessMessage}
            setErrorMessage={setErrorMessage}
            token={token}
          />
        ) : (
          <EnterUsername
            setSuccessMessage={setSuccessMessage}
            setErrorMessage={setErrorMessage}
          />
        )}
        <SuccessMessage>{successMessage}</SuccessMessage>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </div>
    </AuthenticationContainer>
  );
};

export default ResetPassword;
