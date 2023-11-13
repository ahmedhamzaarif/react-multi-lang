import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div id='sidebar'>
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <a href="#" className="nav-link">
                <box-icon type='solid' name='dashboard'></box-icon>
                Dashboard
                </a>
            </li>
            <li className='nav-item'>
                <a href="#" className="nav-link">
                    <box-icon type='solid' name='heart'></box-icon>
                    Favourite
                </a>
            </li>
            <li className='nav-item'>
                <a href="#" className="nav-link">
                    <box-icon type='solid' name='cog'></box-icon>
                    Setting
                </a>
            </li>
            <li className='nav-item'>
                <a href="#" className="nav-link">
                    <box-icon type='solid' name='bell'></box-icon>
                    Notification
                </a>
            </li>
            <li className='nav-item dropdown dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false">
                <box-icon name='user' ></box-icon>
                Profile
            </li>
            <ul className="dropdown-menu">
                <li className='dropdown-item'>
                    <Link to='/profile/edit'>
                        Edit Profile
                    </Link>
                </li>
                <li className='dropdown-item'>Security</li>
            </ul>
        </ul>
    </div>
  )
}

export default Sidebar