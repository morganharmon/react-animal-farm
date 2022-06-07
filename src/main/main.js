import React from 'react';
import './main.css';
import background from '../background.png';
import Animal from '../animal/animal.js';

export default function Main({ animals }) {
  return <main style={{ backgroundImage: `url(${background})` }}>
    {
      animals.map((animal, i) => <Animal key={animal.name + i} {...animal} />) 
    }
  </main>;
}