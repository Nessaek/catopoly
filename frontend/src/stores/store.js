import { action, extendObservable } from 'mobx'

class dataStore {
  constructor(rootStore) {
    this.root = rootStore
    extendObservable(this, {
      users: null,
      usersIsFetching: false,
      playerOnePosition: 0,
      PlayerTwoPosition: 0,
      PlayerThreePosition: 0,
      PlayerFourPosition: 0,
      currentPlayer: null
    })
  }

  getUsers = action('get users', () => {
    this.usersIsFetching = true
    fetch(`//${process.env.REACT_APP_API_DOMAIN}/User`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        return response.json()
      })
      .then(
        action('Fetch users success', response => {
          this.usersIsFetching = false
          this.users = response
        })
      )
  })

  getSinglePlayer = action('get one player', playerId => {
    this.usersIsFetching = true
    fetch(`//${process.env.REACT_APP_API_DOMAIN}/User/${playerId}`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        return response.json()
      })
      .then(
        action('Fetch user success', response => {
          console.log(response)
          this.usersIsFetching = false
          this.currentPlayer = response
        })
      )
  })

  changeUserPosition = action(
    "change the player's position",
    (playerId, position) =>
      fetch('http://localhost:8000/User/edit/' + playerId, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          position: position
        })
      })
        .then(function(response) {
          console.log('piece successfully changed!')
        })
        .catch(function(err) {
          console.log("didn't work" + err)
        })
  )
}

export default dataStore
