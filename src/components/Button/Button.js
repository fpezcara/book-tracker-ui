import React from "react";
import { useHistory } from "react-router-dom";

const Button = ({ title, className, value, onClickHandler }) => {
  const { push } = useHistory();
  const onClickButton = () => {
    push(value);
    onClickHandler && onClickHandler();
  };
  return (
    <button className={className} onClick={onClickButton}>
      {title}
    </button>
  );
};

export default Button;
