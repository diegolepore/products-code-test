import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddItem from './AddItem'
import List from './List'
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
          <AddItem />
          <List />
      </Container>
    )
  }
}

export default connect()(App)
