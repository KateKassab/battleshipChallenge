import React, { Component } from 'react';
import Board from './Board.js'
import Counter from './counter.js'
import '../board.css';

export default class Square extends React.Component {
  constructor(props){
    super(props)
      // this.state = {
      //   col:[y],
      //   row:[x]
      // }
  }
  render(){
    // if(handleClick() === this.props.EMPTY){
    //   this.props.Col.push(this.props.MISS)
    // }

    return(
      <td
        onClick={this.props.onClick}>
        {this.props.cellID}
        {this.props.col}
        {this.props.row}
      </td>
    )
  }
}
