import React, { useContext } from 'react'
import { PlannerContext } from '../../contexts/plannerContext'

import {DropdownContainer, DropdownList, DropdownListItem } from './nav-dropdown.styles'

const NavDropdown = () => {
  const { planner } = useContext(PlannerContext)

  return (
    <DropdownContainer>
      <DropdownList>
        <DropdownListItem>
          ITEM
        </DropdownListItem>
      </DropdownList>
    </DropdownContainer>
  )
}

export default NavDropdown
