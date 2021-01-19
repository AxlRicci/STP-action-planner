import React, {useContext, useState} from 'react'
import { withRouter } from 'react-router-dom'
import {PlannerContext} from '../../contexts/plannerContext'

import NavbarDropdownItem from '../navbar-dropdown-item/navbar-dropdown-item.component'
import NavbarStepActions from '../navbar-step-actions/navbar-step-actions.components'

import {Nav, NavContainer, Logo, NavLink, NavList, NavItem, NavItemDropdown} from './navbar.styles'

const Navbar = ({history}) => {
  const initialDropdownState = {goal: false, activity: false};
  const [showDropdown, setShowDropdown] = useState(initialDropdownState);
  const { planner, nextStep, prevStep, removeActivity, removeGoal} = useContext(PlannerContext)

  const toggleDropdown = (dropdown) => {
    setShowDropdown({...initialDropdownState, [dropdown]: !showDropdown[dropdown]})
  }

  const handleNav = async (direction) => {
    if (direction === 'next') {
      const newStep = nextStep(planner.step)
      console.log(newStep)
      history.replace(`/${newStep}`)
    } else if (direction === 'prev') {
      const newStep = prevStep(planner.step)
      console.log(newStep)
      history.replace(`/${newStep}`)
    }
  }

  return (
    <NavContainer>
      <Nav>
        <NavLink to='/' >
          <Logo />  
        </NavLink>
        <NavList>
          <NavItem onClick={() => toggleDropdown('goal')}>
            <span>Goals ({planner.goals.length})</span>
            {
              showDropdown.goal && planner.goals.length ? (
                <NavItemDropdown>
                  {
                    planner.goals
                      .sort((a,b) => a.name.localeCompare(b.name))
                      .map(goal => (
                        <NavbarDropdownItem label={goal.name} handleClick={() => removeGoal(goal.id)} />
                    ))
                  }
                </NavItemDropdown>
              ) : null
            }
          </NavItem>
          <NavItem onClick={() => toggleDropdown('activity')}>
            <span>Activities ({planner.activities.length})</span>
            {
              showDropdown.activity && planner.activities.length ? (
                <NavItemDropdown>
                  {
                    planner.activities
                      .sort((a,b) => a.name.localeCompare(b.name))
                      .map(activity => (
                        <NavbarDropdownItem label={activity.name} handleClick={() => removeActivity(activity.id)} />
                      ))
                  }
                </NavItemDropdown>
              ) : null
            }
          </NavItem>
        </NavList>
        <NavbarStepActions planner={planner} handleNext={() => handleNav('next')} handlePrev={() => handleNav('prev')} />
      </Nav>
    </NavContainer>
  )
}

export default withRouter(Navbar)
