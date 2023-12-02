import React from 'react';
import './Search.css';

const Search = ({ placeholder, value, onChange }) => {
    return <input className='search-bar'
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange} 
        />
}

export default Search;