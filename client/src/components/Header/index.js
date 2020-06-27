// == Import npm
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// == Import
import './styles.scss';

// == Composant
const Header = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div>Header</div>
    </>
  );
};

// == Export
export default Header;
