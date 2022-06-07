import React from 'react';
import './footer.css';

export default function Footer({ email }) {
  return <footer>
    { 'Contact: ' + email
    }
  </footer>;
}