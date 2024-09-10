import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
         <div className="nav">
          <div className="nav-1">
            <h2 className='text-dark fw-bold'>#DASHMIN</h2>
          </div>
          <div className="nav-2">
            <div className='nav-icon'>
            <i className="bi bi-envelope-fill  fs-6 bg-dark text-light"></i>
            <span className=" fs-5 ms-3">Message</span>
            </div>
            <div className='nav-icon'>
            <i class="bi bi-bell-fill  fs-6  bg-dark text-light"></i>
            <span className=" fs-5 ms-3">Notification</span>
            </div>
            <div className='nav-icon'>
              <img src="public/WhatsApp Image 2024-03-08 at 14.21.35_9047d08c.jpg"/>
              <span className="ms-4 fs-5 fw-bold">Kirti sojitra</span>
            </div>
          </div>
         </div>
         <div className="side-bar">
          <div className='side-bar-nav'>
            <div className='sidebar-icon'>
            <i class="bi bi-house-fill ms-4 fs-4"></i> 
            <NavLink to="/" className="text-decoration-none ms-3 text-dark fw-bold">Home</NavLink>
            </div>
         <div className='sidebar-icon'> <i class="bi bi-keyboard-fill ms-4 fs-4"></i>
         <NavLink to="/form" className="text-decoration-none ms-3 text-dark  fw-bold">Reservation</NavLink>
        </div>
        <div className='sidebar-icon'>
        <i class="bi bi-table ms-4 fs-6 "></i>
        <NavLink to="/table" className="text-decoration-none ms-3 text-dark fw-bold">Table</NavLink>  
        </div>
         </div>
         </div>
    </>
  )
}

export default Header