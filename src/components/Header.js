import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='head'>
        <Link className='lnk' to={"/todo-list"}>Todo List</Link>
        <Link className='lnk' to={"/mockapi-alldata"}>MockApi-Data</Link>
    </div>
  )
}

export default Header