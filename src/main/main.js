import React from 'react';
import './main.css';
import background from '../background.png';
import AnimalList from '../animalList/animallist.js';

export default function Main({ animals }) {
  return <main style={{ backgroundImage: `url(${background})` }}>
    <AnimalList animals={ animals } />
  </main>;
}