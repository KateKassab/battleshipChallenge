import React, { Component } from 'react';
import Board from './Board.js'

export default class Counter extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const torpedosLeft = this.props.torpedosLeft
    const torpedosUsed = this.props.torpedosUsed
    const shipsLeft = this.props.shipsLeft

    return(
      <div>
      <h1 className="counter">Torpedos remaining: {torpedosLeft}</h1>
      <h1 className="counter">Torpedos used: {torpedosUsed}</h1>
      <h1 className="counter">Ships left: {shipsLeft}</h1>
      </div>
    )
  }
}
