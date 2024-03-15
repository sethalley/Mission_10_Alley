import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import BowlerList from './BowlerList';

function App() {
  return (
    <div className="App">
      <Header title="Bowling League Fullstack" />
      <br />
      <br />
      <BowlerList />
    </div>
  );
}
export default App;
