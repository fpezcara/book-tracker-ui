import React from "react";
import { useHistory } from "react-router-dom";

const Button = ({ title, value }) => {
  const { push } = useHistory();

  return <button onClick={() => push(value)}>{title}</button>;
};

export default Button;
