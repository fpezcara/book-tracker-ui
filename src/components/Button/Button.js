import React from "react";
import { useNavigate } from "react-router-dom";

import { StyledButton } from "../../styles/Button.style";

const Button = ({ title, className, value }) => {
  const navigate = useNavigate();
  const onClickButton = () => {
    value && navigate(value);
  };

  return (
    <StyledButton className={className} onClick={onClickButton}>
      {title}
    </StyledButton>
  );
};

export default Button;
