import React from 'react'

export default class TableChild extends React.Component {
    render() {
      return (
        <table>
          <thead>
            <tr>
              <th><input type="checkbox"/></th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox"/></td>
              <td>name1</td>
            </tr>
            <tr>
              <td><input type="checkbox"/></td>
              <td>name2</td>
            </tr>
          </tbody>
        </table>
      )
    }
  }