import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Form from "../Form";
import DropdownList from "../DropdownList";
import Cookies from "js-cookie";

import { AddBookWrapper, AddBookContainer } from "../../styles/AddBook.style";

const AddBook = () => {
  // todo: could I possibly keep both the searchInput + the selectType within the same state?

  const [selectType, setSelectType] = useState("title");
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const userId = Cookies.get("userId");

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
  }, [userId, navigate]);

  return (
    <AddBookWrapper>
      <AddBookContainer>
        <Form
          selectType={selectType}
          setSelectType={setSelectType}
          setTriggerSearch={setTriggerSearch}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        {!!searchInput && (
          <DropdownList
            selectType={selectType}
            searchInput={searchInput}
            triggerSearch={triggerSearch}
            setTriggerSearch={setTriggerSearch}
          />
        )}
      </AddBookContainer>
    </AddBookWrapper>
  );
};

export default AddBook;
