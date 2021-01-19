import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import { NavStepActions } from './navbar-step-actions.styles'

const NavbarStepActions = ({planner, handleNext, handlePrev}) => {
  const currentStepIndex = planner.steps.indexOf(planner.step);


  return (
    <NavStepActions>
      {
        currentStepIndex > 1 ? (
          <CustomButton onClick={handlePrev}>Prev</CustomButton>
        ) : null          
      }
      {
        currentStepIndex > 0 ? (
          <CustomButton onClick={handleNext}>Next</CustomButton>
        ) : null
      }
    </NavStepActions>
  )
}

export default NavbarStepActions
