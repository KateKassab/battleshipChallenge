import React, { Component } from 'react';
import Board from './components/Board'
import Counter from './components/counter'
import Square from './components/square'
import './board.css';


class App extends Component {
  render() {
    return (
      <div>
        <h1>
          BATTLECHIP
        </h1>
        <Board className="board" maxTorpedoes={10} />
      </div>
    );
  }
}

export default App;
