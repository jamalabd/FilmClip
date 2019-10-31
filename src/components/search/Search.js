import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

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

  return (
    <Fragment>
      <form className='Search' action=''>
        <input type='text' value={search} onChange={handleChange} />
        <input onClick={searchFunction} type='submit' value='SEARCH' />
      </form>
    </Fragment>
  );
}

Search.protoTypes = {
  search: PropTypes.string.isRequired
};

export default Search;
