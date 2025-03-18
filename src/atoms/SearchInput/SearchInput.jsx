import PropTypes from "prop-types";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const StyledSearchSection = styled.section`
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

export const SearchInput = ({ keyword, setKeyword }) => {
  return (
    <StyledSearchSection>
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
    </StyledSearchSection>
  );
};

SearchInput.prototype = {
  keyword: PropTypes.text,
  setKeyword: PropTypes.func,
};
