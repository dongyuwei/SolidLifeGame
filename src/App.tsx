import type { Component } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <p>life game</p>
      </header>
    </div>
  );
};

export default App;
