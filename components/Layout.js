import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>This is the title of the site</h1>
      </header>
      <Navbar />
      {children}
    </div>
  )
}
