import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Top from './top/Top'
import Users from './users/Users'

// react-bootstrap を使うために import する
// App で import することで子コンポーネントでも有効になる
import 'bootstrap/dist/css/bootstrap.min.css'

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