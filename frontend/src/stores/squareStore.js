import { action, extendObservable } from 'mobx'

class squareStore {
  constructor(rootStore) {
    this.root = rootStore
    extendObservable(this, {
      squares: null,
      squaresIsFetching: false
    })
  }

  getAllSquares = action('get all squares', () => {
    this.squaresIsFetching = true
    fetch(`//${process.env.REACT_APP_API_DOMAIN}/squares`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        return response.json()
      })
      .then(
        action('Fetch squares success', response => {
          this.squaresIsFetching = false
          this.squares = response
        })
      )
  })
}

export default squareStore
