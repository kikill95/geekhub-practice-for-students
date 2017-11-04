import React, { Component } from 'react';

export default class MyComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rooms: this.props.startupRooms || [],
      name: '',
      size: 0
    }

    this.renderHeader = this.renderHeader.bind(this)
    this.updateNewRoom = this.updateNewRoom.bind(this)
    this.addNewRoom = this.addNewRoom.bind(this)
  }

  updateNewRoom(value, event) {
    this.setState({
      [value]: event.target.value
    })
  }

  addNewRoom(event) {
    event.preventDefault()
    this.setState({
      rooms: this.state.rooms.concat([{
        name: this.state.name,
        size: this.state.size
      }]),
      name: '',
      size: 0
    })
  }

  renderHeader() {
    return (
      <ul>
        {this.state.rooms.sort(function (a, b) {return a.size - b.size}).map(function(room, index) {
          return (
            <li key={index} style={{borderBottom: '2px solid black'}}>
              Room name is: {room.name};
              <br/>
              Size is: {room.size}
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <h2>Add new item</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.updateNewRoom.bind(null, 'name')}
          />
          <input
            type="number"
            placeholder="Size"
            value={this.state.size}
            onChange={this.updateNewRoom.bind(null, 'size')}
          />
          <button type="submit" onClick={this.addNewRoom}>Add</button>
        </form>
        {this.renderHeader()}
      </div>
    )
  }
}
