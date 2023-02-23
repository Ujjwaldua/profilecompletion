import React from 'react'
import '../App.css'
import Complete from './Complete'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <>
    
    



  <div class="sidebar">
    <p><NavLink to="/profile" style={{ textDecoration: 'none' }}>Personal Information</NavLink></p>
    <p><NavLink to="/Profilephoto"  style={{ textDecoration: 'none' }}>Upload Profile</NavLink></p>
    <p><NavLink to="/Education"  style={{ textDecoration: 'none' }}>Education</NavLink></p>
    <p><NavLink to="/Photos"  style={{ textDecoration: 'none' }}>Photos and Videos</NavLink></p>
    <p><NavLink to="/Verification"  style={{ textDecoration: 'none' }}>Verification</NavLink></p>
    <p><NavLink to="/Portfolio"  style={{ textDecoration: 'none' }}>Portfolio</NavLink></p>
    <p><NavLink to="/Security" style={{ textDecoration: 'none' }}>Security</NavLink></p>
    <p><NavLink to="/Other" style={{ textDecoration: 'none' }}>Other Settings</NavLink></p>
  </div>



    </>
  )
}

export default Sidebar