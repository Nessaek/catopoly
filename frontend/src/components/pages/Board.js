import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

class Board extends Component {
  componentDidMount() {
    this.props.dataStore.getSinglePlayer(1)
    this.props.squareStore.getAllSquares()
  }

  randomNumber() {
    return Math.floor(Math.random() * 6) + 1
  }

  roll(playerId, playerPosition) {
    let dice1 = this.randomNumber()
    let dice2 = this.randomNumber()

    let totalRoll = dice1 + dice2
    let totalPosition = totalRoll + playerPosition
    this.props.dataStore.changeUserPosition(playerId, totalRoll)
    document.getElementById('dice').innerHTML =
      'You rolled ' + totalRoll + '!  You are now on ' + totalPosition
  }

  render() {
    var player = {
      name: '',
      id: '',
      position: 0
    }

    var squares = {
      title: '',
      price: '',
      colour: '',
      treats: '',
      beds: '',
      owner: ''
    }

    if (this.props.squareStore.squares) {
      squares = this.props.squareStore.squares.map(square => {
        return (
          <div>
            <div className={`space ${square.type} `} />
            <div class="container">
              <div class={`color-bar ${square.color}`} />
              <div class="name">{square.title}</div>
              <div class="price">{square.price}</div>
            </div>
          </div>
        )
      })
    }

    if (this.props.dataStore.currentPlayer) {
      var currentPlayer = this.props.dataStore.currentPlayer
      player = {
        name: currentPlayer.name,
        id: currentPlayer.id,
        position: currentPlayer.position
      }
    }

    return (
      <div>
        <h1>Player: {player.name}</h1>
        <h2>Roll Dice!</h2>
        <button onClick={() => this.roll(player.id, player.position)}>
          Roll
        </button>{' '}
        <h1 id="dice">{}</h1>
        <div className="table">
          <div className="board">
            <div className="center">
              <div className="community-chest-deck">
                <h2 className="label">Community Chest</h2>
                <div className="deck" />
              </div>
              <h1 className="title">MONOPOLY</h1>
              <div className="chance-deck">
                <h2 className="label">Chance</h2>
                <div className="deck" />
              </div>
            </div>
            <div className="space corner go" id="1">
              <div className="container">
                <div className="instructions">
                  Collect $200.00 salary as you pass
                </div>
                <div className="go-word">go</div>
              </div>
              <div className="arrow fa fa-long-arrow-left" />
            </div>
            <div className="row horizontal-row bottom-row">
              <div className="space property" id="10">
                <div className="container">
                  <div className="color-bar light-blue" />
                  <div className="name">Connecticut Avenue</div>
                  <div className="price">PRICE $120</div>
                </div>
              </div>
              <div className="space property" id="9">
                <div className="container">
                  <div className="color-bar light-blue" />
                  <div className="name">Vermont Avenue</div>
                  <div className="price">Price $100</div>
                </div>
              </div>
              <div className="space chance" id="8">
                <div className="container">
                  <div className="name">Chance</div>
                  <i className="drawing fa fa-question" />
                </div>
              </div>
              <div className="space property" id="7">
                <div className="container">
                  <div className="color-bar light-blue" />
                  <div className="name">Oriental Avenue</div>
                  <div className="price">Price $100</div>
                </div>
              </div>
              <div className="space railroad" id="6">
                <div className="container">
                  <div className="name">Reading Railroad</div>
                  <i className="drawing fa fa-subway" />
                  <div className="price">Price $200</div>
                </div>
              </div>
              <div className="space fee income-tax" id="5">
                <div className="container">
                  <div className="name">Income Tax</div>
                  <div className="diamond" />
                  <div className="instructions">Pay 10%or$200</div>
                </div>
              </div>
              <div className="space property" id="4">
                <div className="container">
                  <div className="color-bar dark-purple" />
                  <div className="name">Baltic Avenue</div>
                  <div className="price">Price $50</div>
                </div>
              </div>
              <div className="space community-chest" id="3">
                <div className="container">
                  <div className="name">Community Chest</div>
                  <i className="drawing fa fa-cube" />
                  <div className="instructions">
                    Follow instructions on top card
                  </div>
                </div>
              </div>
              <div className="space property" id="2">
                <div className="container">
                  <div className="color-bar dark-purple" />
                  <div className="name three-line-name">
                    Mediter-raneanAvenue
                  </div>
                  <div className="price">Price $50</div>
                </div>
              </div>
            </div>
            <div className="space corner jail" id="11">
              <div className="just">Just</div>
              <div className="drawing">
                <div className="container">
                  <div className="name">In</div>
                  <div className="window">
                    <div className="bar" />
                    <div className="bar" />
                    <div className="bar" />
                    <i className="person fa fa-frown-o" />
                  </div>
                  <div className="name">Jail</div>
                </div>
              </div>
              <div className="visiting">Visiting</div>
            </div>
            <div className="row vertical-row left-row" id="20">
              <div className="space property">
                <div className="container">
                  <div className="color-bar orange" />
                  <div className="name">New York Avenue</div>
                  <div className="price">Price $200</div>
                </div>
              </div>
              <div className="space property" id="19">
                <div className="container">
                  <div className="color-bar orange" />
                  <div className="name">Tennessee Avenue</div>
                  <div className="price">Price $180</div>
                </div>
              </div>
              <div className="space community-chest" id="18">
                <div className="container">
                  <div className="name">Community Chest</div>
                  <i className="drawing fa fa-cube" />
                  <div className="instructions">
                    Follow instructions on top card
                  </div>
                </div>
              </div>
              <div className="space property" id="17">
                <div className="container">
                  <div className="color-bar orange" />
                  <div className="name">St. James Avenue</div>
                  <div className="price">Price $180</div>
                </div>
              </div>
              <div className="space railroad" id="16">
                <div className="container">
                  <div className="name long-name">Pennsylvania Railroad</div>
                  <i className="drawing fa fa-subway" />
                  <div className="price">Price $200</div>
                </div>
              </div>
              <div className="space property" id="15">
                <div className="container">
                  <div className="color-bar purple" />
                  <div className="name">Virginia Avenue</div>
                  <div className="price">Price $160</div>
                </div>
              </div>
              <div className="space property" id="14">
                <div className="container">
                  <div className="color-bar purple" />
                  <div className="name">States Avenue</div>
                  <div className="price">Price $140</div>
                </div>
              </div>
              <div className="space utility electric-company" id="13">
                <div className="container">
                  <div className="name">Electric Company</div>
                  <i className="drawing fa fa-lightbulb-o" />
                  <div className="price">Price $150</div>
                </div>
              </div>
              <div className="space property" id="12">
                <div className="container">
                  <div className="color-bar purple" />
                  <div className="name">St. Charles Place</div>
                  <div className="price">Price $140</div>
                </div>
              </div>
            </div>
            <div className="space corner free-parking" id="21">
              <div className="container">
                <div className="name">Free</div>
                <i className="drawing fa fa-car" />
                <div className="name">Parking</div>
              </div>
            </div>
            <div className="row horizontal-row top-row" id="22">
              <div className="space property">
                <div className="container">
                  <div className="color-bar red" />
                  <div className="name">Kentucky Avenue</div>
                  <div className="price">Price $220</div>
                </div>
              </div>
              <div className="space chance" id="23">
                <div className="container">
                  <div className="name">Chance</div>
                  <i className="drawing fa fa-question blue" />
                </div>
              </div>
              <div className="space property" id="24">
                <div className="container">
                  <div className="color-bar red" />
                  <div className="name">Indiana Avenue</div>
                  <div className="price">Price $220</div>
                </div>
              </div>
              <div className="space property" id="25">
                <div className="container">
                  <div className="color-bar red" />
                  <div className="name">Illinois Avenue</div>
                  <div className="price">Price $200</div>
                </div>
              </div>
              <div className="space railroad" id="26">
                <div className="container">
                  <div className="name">B & O Railroad</div>
                  <i className="drawing fa fa-subway" />
                  <div className="price">Price $200</div>
                </div>
              </div>
              <div className="space property" id="27">
                <div className="container">
                  <div className="color-bar yellow" />
                  <div className="name">Atlantic Avenue</div>
                  <div className="price">Price $260</div>
                </div>
              </div>
              <div className="space property" id="28">
                <div className="container">
                  <div className="color-bar yellow" />
                  <div className="name">Ventnor Avenue</div>
                  <div className="price">Price $260</div>
                </div>
              </div>
              <div className="space utility waterworks" id="29">
                <div className="container">
                  <div className="name">Waterworks</div>
                  <i className="drawing fa fa-tint" />
                  <div className="price">Price $120</div>
                </div>
              </div>
              <div className="space property" id="30">
                <div className="container">
                  <div className="color-bar yellow" />
                  <div className="name">Marvin Gardens</div>
                  <div className="price">Price $280</div>
                </div>
              </div>
              <div className="space corner go-to-jail" id="31">
                <div className="container">
                  <div className="name">Go To</div>
                  <i className="drawing fa fa-gavel" />
                  <div className="name">Jail</div>
                </div>
              </div>
            </div>
            <div className="row vertical-row right-row" id="32">
              <div className="space property">
                <div className="container">
                  <div className="color-bar green" />
                  <div className="name">Pacific Avenue</div>
                  <div className="price">Price $300</div>
                </div>
              </div>
              <div className="space property" id="33">
                <div className="container">
                  <div className="color-bar green" />
                  <div className="name three-line-name">
                    North Carolina Avenue
                  </div>
                  <div className="price">Price $300</div>
                </div>
              </div>
              <div className="space community-chest" id="34">
                <div className="container">
                  <div className="name">Community Chest</div>
                  <i className="drawing fa fa-cube" />
                  <div className="instructions">
                    Follow instructions on top card
                  </div>
                </div>
              </div>
              <div className="space property" id="35">
                <div className="container">
                  <div className="color-bar green" />
                  <div className="name long-name">Pennsylvania Avenue</div>
                  <div className="price">Price $320</div>
                </div>
              </div>
              <div className="space railroad" id="36">
                <div className="container">
                  <div className="name">Short Line</div>
                  <i className="drawing fa fa-subway" />
                  <div className="price">Price $200</div>
                </div>
              </div>
              <div className="space chance" id="37">
                <div className="container">
                  <div className="name">Chance</div>
                  <i className="drawing fa fa-question" />
                </div>
              </div>
              <div className="space property" id="38">
                <div className="container">
                  <div className="color-bar dark-blue" />
                  <div className="name">Park Place</div>
                  <div className="price">Price $350</div>
                </div>
              </div>
              <div className="space fee luxury-tax" id="39">
                <div className="container">
                  <div className="name">Luxury Tax</div>
                  <div className="drawing fa fa-diamond" />
                  <div className="instructions">Pay $75.00</div>
                </div>
              </div>
              <div className="space property" id="40">
                <div className="container">
                  <div className="color-bar dark-blue" />
                  <div className="name">Boardwalk</div>
                  <div className="price">Price $400</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default inject('dataStore', 'squareStore')(observer(Board))
