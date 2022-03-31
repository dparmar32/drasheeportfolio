import React from 'react';
/**
 * It renders a header with a title and a child element.
 * @param props - The properties passed to the component.
 * @returns A header with a title and a child element.
 */
function Header(props) {
  return (
    <header className="flex-row space-between px-1">
      <h1>Drashtee Parmar</h1>
      {props.children}
    </header>
  );
}
export default Header;
