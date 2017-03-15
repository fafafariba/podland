import React from 'react';
import AuthModal from './session/auth_modal';
import ReactDOM from 'react-dom';



const Splash = (props) => (
  <div>
    <h1>Splash</h1>
    <button id="auth-form" formType="newUser">Sign Up</button>
    <AuthModal />
    <button id="auth-form" formType="login">Login</button>
    <button id="auth-form" formType="guest">Guest</button>
  </div>
);

export default Splash;
