import React from "react";

const Select = ({ selectValue, optionValues, onChangeHandler, dataTestId }) => (
  <select
    value={selectValue?.toLowerCase()}
    onChange={onChangeHandler}
    data-testid={dataTestId}
  >
    {optionValues &&
      optionValues.map((optionAvailable, i) => (
        <option key={i} value={optionAvailable.toLowerCase()}>
          {optionAvailable}
        </option>
      ))}
  </select>
);

export default Select;
