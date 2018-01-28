import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { UserForm, Users, Board, squares, Dice, NavBar } from 'components'
import rootStore from 'stores'

const App = () => {
  return (
    <Provider
      dataStore={rootStore.dataStore}
      squareStore={rootStore.squareStore}
    >
      <Router>
        <div className="App">
          <NavBar />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Board} />
              <Route exact path="/adduser" component={UserForm} />
              <Route exact path="/user" component={Users} />
              <Route exact path="/board" component={Board} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  )
}

export default App
