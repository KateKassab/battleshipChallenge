import React, { Component } from 'react';
import Board from './Board.js'

export default class Counter extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    let counter = this.props.counter

    return(
      <h1 id="counter">Torpedos remaining: {counter}</h1>
    )
  }
}
