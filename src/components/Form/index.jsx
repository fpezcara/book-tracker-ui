import React from "react";
import Select from "../Select";
import Button from "../Button";

import { StyledForm } from "../../styles/Form.style";

import { searchBy } from "../../assets/search-by-type";

const Form = ({
  selectType,
  setSelectType,
  setTriggerSearch,
  searchInput,
  setSearchInput,
}) => {
  const onChangeHandler = ({ target: { value, name } }) => {
    if (name === "input") {
      setSearchInput(value);
      setTriggerSearch(true);
    } else {
      setSelectType(value);
    }
  };

  return (
    <>
      <Button
        className="go-back"
        value={-1}
        title="go back"
        dataTestId="go-back-button"
      />
      <StyledForm>
        <input
          type="text"
          name="input"
          onChange={onChangeHandler}
          value={searchInput}
          placeholder="Search by Title, Author or ISBN. . ."
          data-testid="search-by-input"
        />

        <Select
          name="select"
          selectValue={selectType}
          optionValues={searchBy.map(({ value }) => value)}
          onChangeHandler={onChangeHandler}
          dataTestId={"search-by-options-select"}
        />
      </StyledForm>
    </>
  );
};

export default Form;
