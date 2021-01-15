import React, {useContext} from 'react'
import { PlannerContext } from '../../contexts/plannerContext'
import {HomeContainer, Button, ActionsContainer} from './home.styles'

const HomePage = () => {
  const {clearPlanner, planner: {step, steps}} = useContext(PlannerContext);
  return (
    <HomeContainer>
      <ActionsContainer>
        <Button to={`/${steps[1]}`} onClick={clearPlanner}>Start New</Button>
        <Button to={`/${step}`}>Resume Previous Action Planner</Button>
        {/* <Button onClick={() => updatePlannerStep("activity-selection")}>Set Sample step</Button> */}
      </ActionsContainer>
    </HomeContainer>
  )
}

export default HomePage
