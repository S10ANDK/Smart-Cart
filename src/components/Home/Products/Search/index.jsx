import React, { useState } from 'react';
import StyledSearchForm from './index.styled';
import _debounce from 'lodash/debounce';

const Search = ({ onSearch, minLength }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = _debounce((searchTerm) => {
    onSearch(searchTerm);
  }, 300);

  const handleChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    if (newSearchTerm.length >= minLength || newSearchTerm.length === 0) {
      debouncedSearch(newSearchTerm);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <StyledSearchForm onSubmit={handleSubmit}>
        <input
          type="search"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search"
        />
      </StyledSearchForm>
    </div>
  );
};

export default Search;
