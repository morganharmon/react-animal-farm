import React from 'react';
import './animal.css';

export default function Animal({ name, type, says, top, left }) {
  return (
    <div className='animal' style={{ width: '200px', position: 'absolute', top, left }}>
      <p>{ name }</p>
      <img src={`/animals/${type}.svg`}/>
      <p>{ says }</p>
    </div>
  );
}