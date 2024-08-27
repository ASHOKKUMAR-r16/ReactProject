import React, { useState } from 'react';
 
const SearchFilter = ({ onSearch, onFilter }) => {
  const [query, setQuery] = useState('');
  
 
  const handleSearch = (e) => {
    e.preventDefault(); 
    onSearch(query);
  };
 
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };
 
  
 
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text" className='searchtop'
        placeholder="Search by title"
        value={query}
        onChange={handleQueryChange}
      />
      <button type="submit" className='submittop' style={{backgroundColor:"lightblue"}}>Search</button>
      
    </form>
  );
};
 
export default SearchFilter;
