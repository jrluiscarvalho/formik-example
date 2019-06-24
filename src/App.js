import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import MyFormYup from './MyFormYup'
import './styles.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyFormYup />
      </div>
    )
  }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
