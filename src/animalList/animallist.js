import React from 'react';
import Animal from '../animal/animal.js';

export default function AnimalList({ animals }) {
  return (
    <div>
      {
        animals.map((animal, i) => <Animal key={animal.name + i} {...animal} />) 
      }
    </div>
  );
}