import StyledSearchForm from "./index.styled";

const Search = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <StyledSearchForm>
      <input type="search" onChange={handleSearch} placeholder="Search"></input>
    </StyledSearchForm>
  );
};

export default Search;
