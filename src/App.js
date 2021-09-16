import React from 'react';

import Nav from './components/Nav';

import './App.css'

// arrow function
const App = () => {
  return (
    <div className="App">
      <Nav />
      <main className="App-content">
        <span>Empty</span>
      </main>
    </div>
  );
};

export default App;