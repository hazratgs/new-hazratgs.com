import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Wrapper } from './styles'
import Main from './main/index'
import Footer from '../components/Footer'

export default class Pages extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Router>
          <Route path="/" component={Main} />
        </Router>
        <Footer />
      </Wrapper>
    )
  }
}
