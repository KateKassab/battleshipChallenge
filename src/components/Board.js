import React, { Component } from 'react';
import '../board.css'; //links our CSS file
import Counter from './counter.js'
import Square from './square.js'

const EMPTY = 0
const SHIP = 1
const MISS = 2
const HIT = 3

class Board extends Component { //begin class
  constructor(props) {
    super(props)

    this.state={ //begins state
      board: [], //sets board to an empty array
      torpedosLeft: 25,
      torpedosUsed: 0
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
  handleClick(x, y) {
    // console.log(e.target);

    const { board, torpedosLeft, torpedosUsed } = this.state

    if(board[x][y] === SHIP) {
      <div className="cell hit">
      {alert("ya got it")}
      </div>
    } else {
      <div className="cell miss">
        {alert("uh nope")}
      </div>
    }

    if(torpedosLeft <= 0) {
      alert("uhhhn you lose");
    } else {
      // this.setState.torpedosLeft-=1
      this.setState({
      torpedosLeft: torpedosLeft-1,
      torpedosUsed: torpedosUsed+1
      })
      console.log(torpedosLeft)
    }
  }

  renderCol(col) { //creates one row
    var Col = []

    for(var row = 0; row < 10; row++) {


      if(this.state.board[col][row]===SHIP) {
        Col.push(<Square
            id='hit'
            key={col + '_' + row}
            className="cell"
            onClick={this.handleClick.bind(this, col, row)}


        />)
      } else {
          Col.push(<Square
            id='miss'
            key={col + '_' + row}
            className="cell"
            onClick={this.handleClick.bind(this, col, row)}

        />)
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
        <Counter
          torpedosLeft = {this.state.torpedosLeft}
          torpedosUsed = {this.state.torpedosUsed}
          />
      </div>
    )
  }
}



export default Board;
