import React from "react";
import { useNavigate } from "react-router";

import { StyledButton } from "../../styles/Button.style";

const Button = ({ title, className, value, onClickHandler, dataTestId }) => {
  const navigate = useNavigate();
  const onClickButton = () => {
    value && navigate(value);
    onClickHandler && onClickHandler();
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
