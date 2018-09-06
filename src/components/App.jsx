import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddItem from './AddItem'
import List from './List'

class App extends Component {
  render() {
    return (
      <div>
        <h1>My app</h1>
        <AddItem />
        <List />
      </div>
    )
  }
}

export default connect()(App)
