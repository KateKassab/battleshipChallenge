import React, { Component } from 'react';
import Board from './Board.js'
import Counter from './counter.js'
import '../board.css';

export default class Square extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const { status, onClick, value } = this.props

    return(
      <td
        className={status}
        onClick={onClick}>
        {value}
      </td>
    )
  }
}
