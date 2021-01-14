import React, {useContext, useState} from 'react'
import { withRouter } from 'react-router-dom'
import {PlannerContext} from '../../contexts/plannerContext'
import { FaBeer } from 'react-icons/fa';

import NavDropdown from '../nav-dropdown/nav-dropdown.component'

import {Nav, NavContainer, Logo, NavLink, NavList, NavItem, NavItemDropdown, NavButton} from './navbar.styles'

const Navbar = ({history}) => {
  const initialDropdownState = {goal: false, activity: false};
  const [showDropdown, setShowDropdown] = useState(initialDropdownState);
  const { planner, stepNavigation, removeActivity, removeGoal} = useContext(PlannerContext)

  const toggleDropdown = (dropdown) => {
    setShowDropdown({...initialDropdownState, [dropdown]: !showDropdown[dropdown]})
  }

  const handleStepNavigation = (currentStep, direction) => {
    history.replace(`/${stepNavigation(currentStep, direction)}`)
  }

  return (
    <NavContainer>
      <Nav>
        <Logo />
        <NavList>
          <NavItem onClick={() => toggleDropdown('goal')}>
            Goals ({planner.goals.length})
            {
              showDropdown.goal && planner.goals.length ? (
                <NavItemDropdown>
                  {
                    planner.goals
                      .sort((a,b) => a.name.localeCompare(b.name))
                      .map(goal => (
                      <NavItem>
                        {goal.name}
                        <FaBeer onClick={() => removeGoal(goal.id)}/>
                      </NavItem>
                    ))
                  }
                </NavItemDropdown>
              ) : null
            }
          </NavItem>
          <NavItem onClick={() => toggleDropdown('activity')}>
            Activities ({planner.activities.length})
            {
              showDropdown.activity && planner.activities.length ? (
                <NavItemDropdown>
                  {
                    planner.activities
                      .sort((a,b) => a.name.localeCompare(b.name))
                      .map(activity => (
                        <NavItem>
                          {activity.name}
                          <FaBeer onClick={() => removeActivity(activity.id)}/>
                        </NavItem>
                      ))
                  }
                </NavItemDropdown>
              ) : null
            }
          </NavItem>
        </NavList>
        <NavButton onClick={() => handleStepNavigation(planner.step, 'prev')}>Prev Step.</NavButton>
        <NavButton onClick={() => handleStepNavigation(planner.step, 'next')}>Next Step.</NavButton>
      </Nav>
    </NavContainer>
  )
}

export default withRouter(Navbar)
