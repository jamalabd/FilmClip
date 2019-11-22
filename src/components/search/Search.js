import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import InputStyle from '../styles/InputStyle';
import SearchStyle from '../styles/SearchStyle';
import FormStyle from '../styles/FormStyle';

function Search(props) {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  };
  const clearSearch = () => {
    setSearch('');
  };

  const searchFunction = e => {
    e.preventDefault();
    props.search(search);
    clearSearch();
  };

  return (<Fragment>
    <FormStyle action=''>
      <SearchStyle type='text' value={search} onChange={handleChange} placeholder='Search'/>
      <InputStyle onClick={searchFunction} type='submit' value='SEARCH'/>
    </FormStyle>
  </Fragment>);
}

Search.protoTypes = {
  search: PropTypes.string.isRequired
};

export default Search;
