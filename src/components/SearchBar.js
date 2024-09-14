import React, { useState } from 'react';
import Select from 'react-select';

const SearchBar = ({ countries, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [options, setOptions] = useState([]);

  const handleInputChange = (inputValue) => {
    setSearchTerm(inputValue);
    onSearch(inputValue); // Call the onSearch prop
  };

  const filteredOptions = countries
    .filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.capital.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map(country => ({
      label: `${country.name} (${country.capital})`,
      value: country
    }));

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '50px' }}>
      <Select
        onInputChange={handleInputChange}
        options={filteredOptions}
        placeholder="Search for a country or capital"
        isClearable
      />
    </div>
  );
};

export default SearchBar;
