import React, { Component } from 'react'
import { Wrapper } from './styles'
import Header from '../../components/Header'
import Description from '../../components/Description'
import Skills from '../../components/Skills'
import Experience from '../../components/Experiens'
import Contact from '../../components/Contact'

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Description />
        <Skills />
        <Experience />
        <Contact />
      </Wrapper>
    );
  }
}

export default App
