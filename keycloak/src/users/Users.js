import React from 'react'
import {Breadcrumb} from 'react-bootstrap'
import UserList from './UserList'

export default class Users extends React.Component {
  render() {
    return (
      <div>
        <h2>ユーザー一覧</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Top</Breadcrumb.Item>
          <Breadcrumb.Item active>Users</Breadcrumb.Item>
        </Breadcrumb>
        <UserList/>
      </div>
    )
  }
}