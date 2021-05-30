import React from "react";
import styled from "styled-components";

export default function Search({ setSearch, search }) {
  return (
    <SCInput>
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
  display: flex;
  .search-input {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color.secondary};
  }
  .search-input:focus {
    border: 1px solid ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 4px ${({ theme }) => theme.color.tertiary};
  }
`;
