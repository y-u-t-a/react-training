import React from 'react'
import TableChild from './TableChild'

export default class TableParent extends React.Component {
  render() {
    return (
      <div>
        <input />
        <button>追加</button>
        <button>削除</button>
        <TableChild />
      </div>
    )
  }
}