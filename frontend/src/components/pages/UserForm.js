import React, { Component } from 'react'
import { createUser } from 'utils'

class UserForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      warnings: {},
      error: null,
      success: null,
      playerOne: '',
      pieceOne: '',
      playerTwo: '',
      pieceTwo: '',
      playerThree: '',
      pieceThree: '',
      playerFour: '',
      pieceFour: ''
    }

    this.submitRequest = this.submitRequest.bind(this)
  }

  submitRequest(event) {
    console.log('here')
    event.preventDefault()
    if (this.state.playerOne) {
      var content = {
        name: this.state.playerOne,
        piece: this.state.pieceOne
      }
      this.createEachUser(content)
    }
    if (this.state.playerTwo) {
      var content = {
        name: this.state.playerTwo,
        piece: this.state.pieceTwo
      }
      this.createEachUser(content)
    }
    if (this.state.playerThree) {
      var content = {
        name: this.state.playerThree,
        piece: this.state.pieceThree
      }
      this.createEachUser(content)
    }
    if (this.state.playerFour) {
      var content = {
        name: this.state.playerFour,
        piece: this.state.pieceFour
      }
      this.createEachUser(content)
    }
  }

  createEachUser(content) {
    createUser(content)
      .then(() => {
        return this.setState({
          success: 'User Added!',
          error: null,
          warnings: {}
        })
      })
      .catch(err => {
        return this.setState({
          error: err.message || 'An unexpected error occurred',
          warnings: {}
        })
      })
  }

  addUser(stateName, e) {
    this.setState({
      [stateName]: e.target.value
    })
  }

  inputFields(name, piece) {
    return (
      <div>
        <label>
          Name:
          <input type="text" onChange={e => this.addUser(name, e)} />
        </label>
        <br />
        <label>
          Piece:
          <input type="text" onChange={e => this.addUser(piece, e)} />
        </label>
        <br />
      </div>
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitRequest}>
          Player 1
          {this.inputFields('playerOne', 'pieceOne')}
          Player 2 {this.inputFields('playerTwo', 'pieceTwo')}Player 3{' '}
          {this.inputFields('playerThree', 'pieceThree')}Player 4{' '}
          {this.inputFields('playerFour', 'pieceFour')}
          <input type="submit" value="Submit" />
        </form>
        <div className="alert alert-danger mt-2" role="alert">
          {this.state.error}
          {this.state.success}
        </div>
      </div>
    )
  }
}
export default UserForm
