import React from 'react';

// CommonJS use of Modules/Components
const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

export const Header2 = () => {
  return <h2>This is Header 2 changed</h2>;
};

export default Header;
