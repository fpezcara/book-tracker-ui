import React from "react";

const Select = ({ selectValue, optionValue, onChangeHandler }) => {
  return (
    <select value={selectValue.toLowerCase()} onChange={onChangeHandler}>
      {optionValue &&
        optionValue.map((optionAvailable, i) => (
          <option key={i} value={optionAvailable}>
            {optionAvailable.charAt(0).toUpperCase() + optionAvailable.slice(1)}
          </option>
        ))}
    </select>
  );
};

export default Select;
