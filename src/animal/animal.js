import React from 'react';

export default function Animal({ name, type, says, top, left }) {
  return (
    <>
      <p>{ name }</p>
      <img src={`/animals/${type}.svg`}/>
      <p>{ type }</p>
      <p>{ says }</p>
      <p>{ top }</p>
      <p>{ left }</p>
    </>
  );
}