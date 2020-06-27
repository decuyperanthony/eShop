// == Import npm
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// == Import component
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';


// == Import
// import reactLogo from './react-logo.svg';
import './styles.scss';

// == Composant
const App = () => {
  const dispatch = useDispatch();
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

// == Export
export default App;
