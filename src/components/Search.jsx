import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [searching, setSearching] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searching}`);
  };

  return (
    <form className="d-flex" onSubmit={handleSearch} role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"

        value={searching}
        onChange={(e) => setSearching(e.target.value)}
      />
      <button type="submit" class="btn btn-info">Search</button>

    </form>
  );
};

export default Search;