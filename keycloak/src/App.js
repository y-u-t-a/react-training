import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/friends' component={Friends} />
      </BrowserRouter>
    )
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
    <a href="/about">about</a>
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
    <p>フレンズに投票するページです</p>
  </div>
)
const Friends = () => (
  <div>
    <h2>Friends</h2>
    <p>ここにフレンズのリストを書きます</p>
  </div>
)