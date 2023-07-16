import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Main() {
  return (

    <>
      <div className='Header'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/About'>About US</Link>
          </li>
          <li>
            <Link to='/Gallery'>Gallery</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact Us</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  )
}

export default Main
