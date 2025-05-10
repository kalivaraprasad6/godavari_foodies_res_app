import React from 'react';
import '../assets/styles/dropdown.css';
export default function Dropdown() {
  const [fetchCountry, setFetchCountry] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [regions, setRegions] = React.useState([]);
  const [countries, setCountries] = React.useState([]);
  const [selectedRegion, setSelectedRegion] = React.useState('');
  const [selectedCountry, setSelectedCountry] = React.useState([]);

  const countryApi = 'https://api.first.org/data/v1/countries';

  const fetchCountryData = React.useCallback(async () => {
    try {
      const response = await fetch(countryApi);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setFetchCountry(result.data);
      console.log(result.data);
    } catch (err) {
      setError(err);
      console.log('Error fetching data:', error);
    } finally {
      console.log(`fetchCountryData called`);
    }
  }, []);

  React.useEffect(() => {
    fetchCountryData();
  }, [fetchCountryData]);

  const unqueRegions = React.useMemo(() => {
    const unqRegion = Object.values(fetchCountry).map(item => item.region);
    return [...new Set(unqRegion)];
  }, [fetchCountry]);

  React.useEffect(() => {
    setRegions(unqueRegions);
  }, [unqueRegions]);

  const handleDropdown = e => {
    const { name, value } = e.target;
    if (name === 'region') {
      setSelectedRegion(value);

      const regCountries = Object.values(fetchCountry).filter(
        item => item.region === e.target.value
      );

      setSelectedCountry(regCountries);
    } else if (name === 'country') {
      setCountries(value);
    }
  };

  return (
    <>
      <h1 className='heading'>Dropdown</h1>
      <div className='drop-container'>
        <select
          className='drop-down'
          name='region'
          onChange={handleDropdown}
          value={selectedRegion}>
          <option>select region</option>
          {regions.map((region, index) => {
            return <option key={index}>{region}</option>;
          })}
        </select>

        <select
          className='drop-down'
          name='country'
          value={countries}
          onChange={handleDropdown}>
          <option>select country</option>
          {selectedCountry.map((country, index) => {
            return <option key={index}>{country.country}</option>;
          })}
        </select>
      </div>

      <p>{selectedRegion}</p>
      <p>{countries}</p>
    </>
  );
}
