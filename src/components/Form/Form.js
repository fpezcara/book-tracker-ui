import React from "react";
import Select from "../Select/Select";

import { FormStyled } from "../../styles/Form.style";

import { searchBy } from "../../assets/search-by-type";

const Form = ({
  selectType,
  setSelectType,
  setTriggerSearch,
  searchInput,
  setSearchInput,
}) => {
  const onChangeHandler = ({ target }) => {
    if (target.name === "input") {
      setSearchInput(target.value);
      setTriggerSearch(true);
    } else {
      setSelectType(target.value);
    }
  };

  return (
    <FormStyled>
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
        optionValue={searchBy.map((type) => type.value)}
        onChangeHandler={onChangeHandler}
      />
    </FormStyled>
  );
};

export default Form;
