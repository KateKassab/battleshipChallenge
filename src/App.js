import React, { Component } from 'react';
import Board from './components/Board'
import Counter from './components/counter'
import Square from './components/square'

import {
  PageHeader
} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div>
        <PageHeader>
          BATTLECHIP
        </PageHeader>
        <Board className="board" />
      </div>
    );
  }
}

export default App;
