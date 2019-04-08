import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './main'

export default class Pages extends PureComponent {
  render() {
    return (
      <Router>
        <Route path="/" component={Main} />
      </Router>
    )
  }
}
