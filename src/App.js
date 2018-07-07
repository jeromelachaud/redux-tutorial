import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { Provider } from 'react-redux'
import store from './redux/store'

import Form from './components/Form'
import Posts from './components/Posts'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Redux tutorial</h1>
          </header>
          <Form />
          <hr />
          <Posts />
        </div>
      </Provider>
    )
  }
}

export default App