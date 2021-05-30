import React from "react";
import styled from "styled-components";

export default function Search({ setSearch, search }) {
  return (
    <SCInput data-test="component-search">
      <div>
        <input
          className="search-input"
          type="search"
          name={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </SCInput>
  );
}

const SCInput = styled.div`
  .search-input {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color.primary};
    height: 30px;
    border-radius: 5px;
    -webkit-transition: all .2s ease-out;
    -moz-transition: all .2s ease-out;
    -ms-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out
  }
  .search-input:focus {
    border: 1px solid ${({ theme }) => theme.color.secondary};
    box-shadow: 0 0 4px ${({ theme }) => theme.color.secondary};
  }
`;
