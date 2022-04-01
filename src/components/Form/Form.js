import React from "react";
import Select from "../Select/Select";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";

import { StyledForm } from "../../styles/Form.style";

import { searchBy } from "../../assets/search-by-type";

const Form = ({
  selectType,
  setSelectType,
  setTriggerSearch,
  searchInput,
  setSearchInput,
}) => {
  const { goBack } = useHistory();
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
      <Button className="go-back" onClickHandler={goBack} title="go back" />
      <StyledForm>
        <input
          type="text"
          name="input"
          onChange={onChangeHandler}
          value={searchInput}
          placeholder="Search by Title, Author or ISBN. . ."
        />

        <Select
          name="select"
          selectValue={selectType}
          optionValue={searchBy.map(({ value }) => value)}
          onChangeHandler={onChangeHandler}
        />
      </StyledForm>
    </>
  );
};

export default Form;
