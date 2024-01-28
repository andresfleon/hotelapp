import React from 'react'
import { Link } from 'react-router-dom'

const HeaderShared = () => {
  return (
    <div>
        <h1><Link to="/">BookingApp2</Link></h1>
        <nav>
            <ul>
                <li><Link to="register">Register</Link></li>
                <li><Link to="login">Login</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default HeaderShared