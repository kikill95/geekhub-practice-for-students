import React, { Component } from 'react';

export default class MyComponent extends Component {
  constructor(props) {
    super(props)
    this.color = 'red'

    this.rooms = [
      {
        name: '#231',
        size: 12
      },
      {
        name: '#230',
        size: 32
      },
      {
        name: '#232',
        size: 20
      },
      {
        name: '#233',
        size: 4
      }
    ]

    this.updateColor = this.updateColor.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
  }

  updateColor() {
    this.color = this.color === 'red' ? 'green' : 'red'
    this.forceUpdate() // do not do this in the future
  }

  renderHeader() {
    return (
      <ul>{this.rooms.map(function(room, index) {
        return (
          <li key={index} style={{borderBottom: '2px solid black'}}>
            Room name is: {room.name};
            <br/>
            Size is: {room.size}
          </li>
        )
      })}</ul>
    )
  }

  render() {
    return (
      <div
        style={{background: this.color}}
        onClick={this.updateColor}
      >
        <h1>{this.renderHeader()}</h1>
      </div>
    )
  }
}
