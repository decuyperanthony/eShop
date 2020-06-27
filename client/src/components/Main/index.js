// == Import npm
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// == Import
// import reactLogo from './react-logo.svg';
import './styles.scss';

// == Composant
const Main = () => {
  const dispatch = useDispatch();
  const clickCount = useSelector((state) => state.counter);

  return (
    <div className="main-container">
      {/* <img src={reactLogo} alt="react logo" /> */}
      <h1>Main container</h1>
      <button
        type="button"
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
        Clic-me ! ({clickCount})
      </button>
    </div>
  );
};

// == Export
export default Main;
