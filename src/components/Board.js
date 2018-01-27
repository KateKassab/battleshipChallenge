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

    const { maxTorpedoes } = this.props

    this.state={ //begins state
      board: [], //sets board to an empty array
      torpedosLeft: maxTorpedoes,
      shipsLeft: 5
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

    this.state.board = board
    console.log(board)
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
  handleClick(row, col) {

    let { board, torpedosLeft, torpedosUsed, shipsLeft } = this.state

    if(board[row][col] === SHIP && torpedosLeft > 0) {
      board[row][col] = HIT

      this.setState({
        shipsLeft: shipsLeft-1,
        torpedosLeft: torpedosLeft-1,
        torpedosUsed: torpedosUsed+1
      })
    } else if (board[row][col] === EMPTY && torpedosLeft > 0) {
      board[row][col] = MISS
      this.setState({
        torpedosLeft: torpedosLeft-1,
        torpedosUsed: torpedosUsed+1
      })
    }

    this.setState({

    })
  }

  renderCol(row) { //creates one row
    const { board } = this.state

    var Col = []

    for(var col = 0; col < 10; col++) {
      let cellId = row + '_' + col
      let status = ""

      if(board[row][col] === HIT) {
        status = "hit"
      } else if (board[row][col] === MISS){
        status = "miss"
      } else{
        status = ""
      }

      Col.push(
        <Square
          key={cellId}
          status={status}
          onClick={this.handleClick.bind(this, row, col)}
          value={board[row][col]}
        />
      )
    }
    return Col
  }

  renderRows(row) { //creates ten rows
    var rows = []

    for(var row = 0; row < 10; row++) {
      rows.push(<tr
            key={row}
            className="row">
            {this.renderCol(row)}
        </tr>)
    }


    return rows
  }

  render() { //renders our grid
    const { torpedosLeft, shipsLeft } = this.state
    const { maxTorpedoes } = this.props

    if(torpedosLeft === 0 || shipsLeft === 0) {
      return (<h1>Game Over!!</h1>)
    }

    return(
      <div>
        <table id="table">
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
        <Counter
          shipsLeft = { shipsLeft }
          torpedosLeft = { torpedosLeft }
          torpedosUsed = { maxTorpedoes - torpedosLeft }
          />
          
      </div>
    )
  }
}

export default Board;
