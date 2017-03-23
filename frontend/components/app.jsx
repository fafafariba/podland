import React from 'react';
import { Link } from 'react-router';
import SplashNavContainer from './splash/splash_nav_container';
import MainNavContainer from './main_nav/main_nav_container';
import FooterContainer from './footer/footer_container';


const App = (props) => {
  console.log(props);
  let navbar = <MainNavContainer />;
  let footer = <FooterContainer/>;
  if (props.location.pathname === "/welcome") navbar = <SplashNavContainer/>;
  return (
    <div>
      { navbar }
      { props.children }
      { footer }
    </div>
  );
};

export default App;
