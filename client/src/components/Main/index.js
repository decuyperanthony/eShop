// == Import npm
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { API_URL } from '../../utils/constante';

// == Import
// import reactLogo from './react-logo.svg';
import './styles.scss';

// == Composant
const Main = () => {
  const dispatch = useDispatch();
  const clickCount = useSelector((state) => state.counter);
  //! ------ axios ------

  useEffect(() => {
    axios
      .get(`${API_URL}/articles`)
      .then((res) => {
        const articles = res.data;
        console.log('articles', articles);
      })
      .catch((error) => console.trace(error));
  });
  // == actions

  // `${API_URL}/articles`;

  // const getCategories = (url = categoriesRequest) => {
  //   const promise = axios.get(
  //     url,
  //   );
  //   promise.then((res) => {
  //     const articles = res.data;
  //     // store.dispatch({ type: SET_CATEGORIES, payload: categories });
  //   });
  // };
  //! ---- fin axios ----

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
      <p>Mes articles</p>
    </div>
  );
};

// == Export
export default Main;
