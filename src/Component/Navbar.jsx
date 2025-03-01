import React from 'react'
import NavbarBelt from './Navbar/NavbarBelt/NavbarBelt'
import NavbarBanner from './Navbar/NavbarBanner/NavbarBanner'

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavbarBelt/>
      <NavbarBanner/>
    </div>
  )
}

export default Navbar
