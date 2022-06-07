import React from 'react';
import './header.css';

export default function Header({ greeting }) {
  return <header>
    {
      greeting
    }
  </header>;
}