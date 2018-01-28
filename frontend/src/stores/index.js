import DataStore from './store'
import squareStore from './squareStore'

class RootStore {
  constructor() {
    this.dataStore = new DataStore(this)
    this.squareStore = new squareStore(this)
  }
}

export default new RootStore()
