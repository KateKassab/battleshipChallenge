import React, { Component } from 'react';
import './board.css'; //links our CSS file

const ship = 1  //sets a global const; used for a placeholder for ships location

class Board extends Component { //begin class
  constructor(props){
    super(props)
    this.state={ //begins state
      board: [] //sets board to an empty array
    }

    // //begins function for onclick change
    // // clickHandler(x,y){
    // //   this.setState({
    // //     newBoard: this.state.board //changes the board for what is clicked
    // //   })
    // }

    this.setUpBoard()
    this.fiveShips()
  }
    setUpBoard(){ //empty array inside of board
      let board = []

      for(var row = 0; row < 10; row++){
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

      this.state.board[row][col]=ship
    }

    fiveShips() { //places five random ships on the board
      for(var i = 0; i<5; i++){
        this.placeShips()
      }
    }

 renderRow(rowNumber){ //creates one row
   // TODO: rename vars
    var row = []
    for(var i = 0; i < 10; i++){
      if(this.state.board[rowNumber][i]==ship){
          row.push(<td id="grid">{ship}</td>)
      } else {
        row.push(<td id="grid">{}</td>)
      }


    }
    return row
  }

  renderRows(){ //creates ten rows
    var rows = []
    for(var i = 0; i < 10; i++){
      rows.push(<tr id="row">{this.renderRow(i)}</tr>)
    }
    return rows
  }

  render(){ //renders our grid
    return(
      <table>
          {this.renderRows()}
      </table>
    )
  }
}



export default Board;
