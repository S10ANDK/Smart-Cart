import StyledSearchForm from "./index.styled"
import { useState } from "react";

const Search = () => {
    const [search, setSearch] = useState("");

    return <StyledSearchForm>
            <input type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search"></input>
        </StyledSearchForm>
}

export default Search;