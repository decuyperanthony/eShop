// == Import npm
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
} from 'react-bootstrap';

import axios from 'axios';
import { API_URL } from '../../utils/constante';

import Loading from '../Loading';

// == Import
// import reactLogo from './react-logo.svg';
import './styles.scss';

// == Composant
const Main = () => {
  const dispatch = useDispatch();
  const clickCount = useSelector((state) => state.counter);
  //! ------ axios ------
  const [articles, setArticles] = useState('');
  useEffect(() => {
    axios
      .get(`${API_URL}/article`)
      .then((res) => {
        // const articles = res.data;
        setArticles(res.data);
      })
      .catch((error) => console.trace(error));
  }, []);
  console.log('articles', articles);
  let articleJSX;
  if (articles) {
    articleJSX = articles.map((article) => (
      <>
        <div key={article.id}>
          {article.id}
          {article.category.title}
        </div>
      </>
    ));
  }
  //! ---- fin axios ----

  return (
    <div className="main-container">
      {/* <img src={reactLogo} alt="react logo" /> */}
      <h1>Main container</h1>
      <Button
        type="button"
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
        Clic-me ! ({clickCount})
      </Button>
      <p>Mes articles</p>
      {articles.length > 0 ? (<>{articleJSX}</>) : <Loading />}
    </div>
  );
};

// == Export
export default Main;
