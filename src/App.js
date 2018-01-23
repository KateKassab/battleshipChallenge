import React, { Component } from 'react';
import Board from './Board.js'
import {
  Grid,
  PageHeader
} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
    <Grid>
      <PageHeader>
        BATTLESHIP
      </PageHeader>
      <Board />
    </Grid>
    );
  }
}

export default App;
