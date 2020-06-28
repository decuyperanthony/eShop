// == Import npm
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// == Import component
import NavBar from '../NavBar';
import Main from '../Main';
import Footer from '../Footer';
import Signup from '../Signup';


// == Import
// import reactLogo from './react-logo.svg';
import './styles.scss';

// == Composant
const App = () => {
  const dispatch = useDispatch();
  return (
    <div className="app">
      <NavBar />
      <Main />
      <Signup />
      <Footer />
    </div>
  );
};

// == Export
export default App;
