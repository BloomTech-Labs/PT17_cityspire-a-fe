import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchCityData } from '../../state/actions';
import { useHistory } from 'react-router-dom';
import { Input } from 'antd';

const SearchStyle = {
  width: '75%',
  margin: '0 auto',
};

export const SearchComponent = ({ fetchCityData }) => {
  const { push } = useHistory();

  const [searchValue, setSearchValue] = useState('');

  // Split search value right by the common
  const splitSearchValue = searchValue.toLowerCase().split(', ');

  // Set the split value to city and state
  const cityAndState = {
    city: splitSearchValue[0],
    state: splitSearchValue[1],
  };

  const { Search } = Input;

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const onSubmit = () => {
    localStorage.setItem('cityAndState', JSON.stringify(cityAndState));
    fetchCityData(cityAndState);
    push(`/${cityAndState.state}/${cityAndState.city}`);
    setSearchValue('');
  };

  return (
    <>
      <Search
        addonBefore={'Search'}
        placeholder="Ex. New York, NY"
        onSearch={() => onSubmit()}
        size="large"
        style={SearchStyle}
        value={searchValue.city}
        onChange={handleChange}
        allowClear
        enterButton
      />
    </>
  );
};

export default connect(null, { fetchCityData })(SearchComponent);
