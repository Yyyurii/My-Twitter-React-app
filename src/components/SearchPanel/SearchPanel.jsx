import React from 'react';
import './SearchPanel.css';

const SearchPanel = () => {
  return (
    <input 
      className="form-control search-input"
      type="text"
      placeholder="Search by records"
    />
  )
}

export default SearchPanel;