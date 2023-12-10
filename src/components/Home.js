// components/Home.js
import React from 'react';
import body from '../body-1.jpeg';

const Home = () => {
  return (
    <div class='homebody'>
     <h2> We can give you </h2>
      <h1> Much More Than Others</h1>
      <img class='photo' src={body} alt="app-logo" />
    </div>
  );
};

export default Home;
