import React from "react";
import { useHistory } from "react-router-dom";

import { StyledButton } from "../../styles/Button.style";

const Button = ({ title, className, value, onClickHandler }) => {
  const { push } = useHistory();
  const onClickButton = () => {
    value && push(value);
    onClickHandler && onClickHandler();
  };

  return (
    <StyledButton className={className} onClick={onClickButton}>
      {title}
    </StyledButton>
  );
};

export default Button;
