import React, { Component } from 'react';
import Board from './Board.js'
import Counter from './counter.js'

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
