import type { Component } from 'solid-js';

import LifeGameView from './LifeGameView';
import './App.css';

const App: Component = () => {
  return (
    <div class='app'>
      <header>Life Game</header>

      <LifeGameView rows={60} columns={100} interval={200} />
    </div>
  );
};

export default App;
