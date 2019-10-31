import React, { Fragment } from 'react';

function Header(props) {
  return (
    <Fragment>
      <header className='header'>
        <h1>{props.text}</h1>
      </header>
    </Fragment>
  );
}

export default Header;
