import React from 'react';
import { Link } from 'react-router';

//Nav bar goes here
//Footer goes here

const App = ({ children }) => (
  <div>
    <h1>Podland</h1>
    { children }
  </div>
);

export default App;
