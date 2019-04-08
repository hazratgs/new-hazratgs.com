import React, { Component } from 'react'
import Header from '../components/header'
import Description from '../components/Description'
import Skills from '../components/Skills'
import Experience from '../components/Experiens'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Description />
        <Skills />
        <Experience />
      </div>
    );
  }
}

export default App
