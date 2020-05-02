import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Top from './top/Top'
import Users from './users/Users'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Top} />
        <Route path='/users' component={Users} />
      </BrowserRouter>
    )
  }
}