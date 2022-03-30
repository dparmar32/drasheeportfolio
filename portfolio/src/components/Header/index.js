import React from 'react';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Drashtee Parmar</h1>
      {props.children}
    </header>
  );
}

export default Header;
