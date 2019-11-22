import React, {Fragment} from 'react';
import HeaderStyle from '../styles/HeaderStyle';

function Header(props) {
  return (<Fragment>
    <HeaderStyle >
      <h1>{props.text}</h1>
    </HeaderStyle>
  </Fragment>);
}

export default Header;
