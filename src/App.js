import React, { useState } from 'react';
import SearchBar from './components/SearchBar';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // Logic to filter countries based on the query
    const filteredResults = countries.filter(country =>
      country.name.toLowerCase().includes(query.toLowerCase()) ||
      country.capital.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const countries = [
    { name: 'United States', capital: 'Washington, D.C.' },
    { name: 'Canada', capital: 'Ottawa' },
    { name: 'Brazil', capital: 'Brasília' },
    { name: 'United Kingdom', capital: 'London' },
    { name: 'Australia', capital: 'Canberra' },
    { name: 'Germany', capital: 'Berlin' },
    { name: 'France', capital: 'Paris' },
    { name: 'Italy', capital: 'Rome' },
    { name: 'Spain', capital: 'Madrid' },
    { name: 'Japan', capital: 'Tokyo' },
    { name: 'China', capital: 'Beijing' },
    { name: 'India', capital: 'New Delhi' },
    { name: 'South Africa', capital: 'Pretoria' },
    { name: 'Russia', capital: 'Moscow' },
    { name: 'Mexico', capital: 'Mexico City' },
    { name: 'Argentina', capital: 'Buenos Aires' },
    { name: 'Chile', capital: 'Santiago' },
    { name: 'Colombia', capital: 'Bogotá' },
    { name: 'Peru', capital: 'Lima' },
    { name: 'Egypt', capital: 'Cairo' },
    { name: 'Turkey', capital: 'Ankara' },
    { name: 'Nigeria', capital: 'Abuja' },
    { name: 'Kenya', capital: 'Nairobi' },
    { name: 'Ghana', capital: 'Accra' },
    { name: 'South Korea', capital: 'Seoul' },
    { name: 'Thailand', capital: 'Bangkok' },
    { name: 'Malaysia', capital: 'Kuala Lumpur' },
    { name: 'Vietnam', capital: 'Hanoi' },
    { name: 'Singapore', capital: 'Singapore' },
    { name: 'New Zealand', capital: 'Wellington' },
    { name: 'Sweden', capital: 'Stockholm' },
    { name: 'Norway', capital: 'Oslo' },
    { name: 'Finland', capital: 'Helsinki' },
    { name: 'Denmark', capital: 'Copenhagen' },
    { name: 'Ireland', capital: 'Dublin' },
    { name: 'Belgium', capital: 'Brussels' },
    { name: 'Netherlands', capital: 'Amsterdam' },
    { name: 'Switzerland', capital: 'Bern' },
    { name: 'Austria', capital: 'Vienna' },
    { name: 'Poland', capital: 'Warsaw' }
  ];

  return (
    <div>
      <SearchBar countries={countries} onSearch={handleSearch} />
      {/* <ul>
        {searchResults.map((country, index) => (
          <li key={index}>{`${country.name} - ${country.capital}`}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default App;
