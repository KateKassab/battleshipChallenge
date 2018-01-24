import React, { Component } from 'react';
import './board.css'; //links our CSS file
import Counter from './counter.js'

const ship = '' //sets a global const; used for a placeholder for ships location

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
  renderRow(rowNumber) { //creates one row
    var Row = []

    for(var row = 0; row < 10; row++) {


      if(this.state.board[rowNumber][row]===ship) {
        Row.push(<td className="grid" onClick={this.handleClick.bind(this, row, rowNumber )} >{ship}</td>)
      } else {
          Row.push(<td className="grid" onClick={this.handleClick.bind(this, row, rowNumber )}>{}</td>)
      }
    }
    return Row
  }

  renderRows() { //creates ten rows
    var rows = []

    for(var row = 0; row < 10; row++) {
      rows.push(<tr id="row" >{this.renderRow(row)}</tr>)
    }
    return rows
  }

  setUpBoard() { //empty array inside of board
    let board = []

    for(var row = 0; row < 10; row++) {
      board[row] = []

      for(var col = 0; col < 10; col++) {
        board[row][col] = 0
      }
    }

    console.log(board);

    this.state.board = board
  }

  placeShips() { //will randomly place ships on the grid
    var row = Math.floor(Math.random() * 10)
    var col = Math.floor(Math.random() * 10)

    this.state.board[row][col] = ship
  }

  fiveShips() { //places five random ships on the board
    for(var ship = 0; ship<5; ship++) {
      this.placeShips()
    }
  }

  // //begins function for onclick change
  handleClick(x,y,e) {
    if(this.state.board[x][y] === ship) {
      e.target.className="green"
      // alert("ya got it");
    } else {
        e.target.className="blue"
      // alert("uh nope");
    }

    if(this.state.counter <= 0) {
      alert("you lose")
    } else {
      // this.setState.counter-=1
      this.setState({
        counter: this.state.counter-1
      })

      console.log(this.state.counter)
    }
  }

  render() { //renders our grid
    return(
      <div>
        <table id="table">
          {this.renderRows()}
        </table>
        <Counter />
      </div>
    )
  }
}



export default Board;
