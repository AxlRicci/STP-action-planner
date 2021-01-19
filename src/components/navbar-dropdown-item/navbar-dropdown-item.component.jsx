import React from 'react'

import { NavItem, CloseIcon } from './navbar-dropdown-item.styles'

const NavbarDropdownItem = ({label, handleClick}) => {
  return (
    <NavItem>
      {label}
      <CloseIcon onClick={handleClick}/>
    </NavItem>
  )
}

export default NavbarDropdownItem
