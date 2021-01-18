import React, {useContext, useState} from 'react'
import { withRouter } from 'react-router-dom'
import {PlannerContext} from '../../contexts/plannerContext'
import { FaBeer } from 'react-icons/fa';
import stswrLogo from '../../assets/img/STSWR_Logo.png'

import NavDropdown from '../nav-dropdown/nav-dropdown.component'

import {Nav, NavContainer, Logo, NavLink, NavList, NavItem, NavItemDropdown, NavActions, NavButton} from './navbar.styles'

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
        <p>Logo</p>
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
        <NavActions>
          <NavButton onClick={() => handleNav('prev')}>Prev Step.</NavButton>
          <NavButton onClick={() => handleNav('next')}>Next Step.</NavButton>
        </NavActions>
      </Nav>
    </NavContainer>
  )
}

export default withRouter(Navbar)
