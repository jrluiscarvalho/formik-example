import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import MyForm from './MyForm'
import MyFormYup from './MyFormYup'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyForm />
        <MyFormYup />
      </div>
    )
  }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
