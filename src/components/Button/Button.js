import React from "react";
import { useNavigate } from "react-router-dom";

import { StyledButton } from "../../styles/Button.style";

const Button = ({ title, className, value, dataTestId }) => {
  const navigate = useNavigate();
  const onClickButton = () => {
    value && navigate(value);
  };

  return (
    <StyledButton
      className={className}
      onClick={onClickButton}
      data-testid={dataTestId}
    >
      {title}
    </StyledButton>
  );
};

export default Button;
