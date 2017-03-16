import React from 'react';
import { Link } from 'react-router';
import SplashNavContainer from './splash/splash_nav_container';
import MainNavContainer from './main_nav/main_nav_container';

//Nav bar goes here
//Footer goes here

const App = (props) => {
  let navbar = <MainNavContainer />;
  if (props.location.pathname === "/welcome") navbar = <SplashNavContainer/>;
  return (
    <div>
      { navbar }
      { props.children }
    </div>
  );
};

export default App;
