import React, { Component } from 'react';
import Board from './Board.js'

export default class Counter extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const torpedosLeft = this.props.torpedosLeft
    const torpedosUsed = this.props.torpedosUsed

    return(
      <div>
      <h1 className="counter">Torpedos remaining: {this.props.torpedosLeft}</h1>
      <h1 className="counter">Torpedos used: {this.props.torpedosUsed}</h1>
      </div>
    )
  }
}
