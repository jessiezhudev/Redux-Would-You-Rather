import React, {Component} from 'react'
import { BrowserRouter, IndexRoute, Route, hashHistory } from 'react-router-dom'
import { MainContainer, HomeContainer } from 'containers'

export default function getRoutes (checkAuth, history) {
  return (
    <BrowserRouter history={hashHistory}>
      <div>
        <Route path='/' component={MainContainer}>
        </Route>
      </div>
    </BrowserRouter>
  )
}
