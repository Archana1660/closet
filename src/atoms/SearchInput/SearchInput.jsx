import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";

import { Colors } from "../../utils/Colors";

const StyledInput = styled.input`
  background: transparent;
  border: none;
  width: 100%;
  color: ${Colors.TEXT_COLOR};
  font-weight: bold;
  font-size: 1rem;
`;

const StyledForm = styled.form`
  background-color: #302f2f;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  color: ${Colors.TEXT_COLOR};
`;

export const SearchInput = () => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault;
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        id="searchInput"
        value={keyword}
        type="text"
        placeholder="Find the item you are looking for"
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      <StyledButton>
        <FontAwesomeIcon icon={faSearch} />
      </StyledButton>
    </StyledForm>
  );
};
