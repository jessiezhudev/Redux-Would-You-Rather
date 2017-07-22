import React, {Component} from 'react'
import { BrowserRouter, IndexRoute, Route, hashHistory } from 'react-router-dom'
import { MainContainer, HomeContainer } from 'containers'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter history={hashHistory}>
        <div>
          <Route path='/' component={MainContainer}>
          </Route>
        </div>
      </BrowserRouter>
    )
  }
}
export default Routes
