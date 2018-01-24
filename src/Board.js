import React, { Component } from 'react';
import './board.css'; //links our CSS file
import Counter from './counter.js'

const EMPTY = 0
const SHIP = 1
const MISS = 2
const HIT = 3

class Board extends Component { //begin class
  constructor(props) {
    super(props)

    this.state={ //begins state
      board: [], //sets board to an empty array
      bgColor: '',
      counter: 25
    }

    this.setUpBoard()
    this.fiveShips()
  }

  setUpBoard() { //empty array inside of board
    let board = []

    for(var col = 0; col < 10; col++) {
      board[col] = []

      for(var row = 0; row < 10; row++) {
        board[col][row] = EMPTY
      }
    }

    console.log(board);

    this.state.board = board
  }

  placeShips() { //will randomly place ships on the grid
    var row = Math.floor(Math.random() * 10)
    var col = Math.floor(Math.random() * 10)

    this.state.board[col][row] = SHIP
  }

  fiveShips() { //places five random ships on the board
    for(var ship = 0; ship<5; ship++) {
      this.placeShips()
    }
  }

  // begins function for onclick change
  handleClick(x, y, e) {
    console.log(e.target);

    const { board, counter } = this.state

    if(board[x][y] === SHIP) {
      e.target.className="cell hit"
      // alert("ya got it");
    } else {
      e.target.className="cell miss"
      // alert("uh nope");
    }

    if(counter <= 0) {
      alert("uhhhn you lose");
    } else {
      // this.setState.counter-=1
      this.setState({
      counter: counter-1
      })

      console.log(board);

      console.log(counter)
    }
  }

  renderCol(col) { //creates one row
    var Col = []

    for(var row = 0; row < 10; row++) {


      if(this.state.board[col][row]===SHIP) {
        Col.push(<td
            key={col + '_' + row}
            className="cell"
            onClick={this.handleClick.bind(this, col, row)}>
            {SHIP}
        </td>)
      } else {
          Col.push(<td
            key={col + '_' + row}
            className="cell"
            onClick={this.handleClick.bind(this, col, row)}>
            {""}
        </td>)
      }
    }
    return Col
  }

  renderRows(row) { //creates ten rows
    var rows = []

    for(var row = 0; row < 10; row++) {
      rows.push(<tr
            key={row}
            className="row" >
            {this.renderCol(row)}
        </tr>)
    }


    return rows
  }

  render() { //renders our grid
    return(
      <div>
        <table id="table">
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
        <Counter  counter = {this.state.counter} />
      </div>
    )
  }
}



export default Board;
