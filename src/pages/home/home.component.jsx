import React, {useContext} from 'react'

import { PlannerContext } from '../../contexts/plannerContext'

import CustomButton from '../../components/custom-button/custom-button.component'

import {PageContainer, HomeContainer, HomeContent, Button, ActionsContainer, HeadingContainer, HeadingTitle, HeadingSubtitle} from './home.styles'

const HomePage = () => {
  const {clearPlanner, planner: {step, steps}} = useContext(PlannerContext);
  return (
    <PageContainer>
      <HomeContainer>
        <HomeContent>
          <HeadingContainer>
            <HeadingTitle>Welcome,</HeadingTitle>
            <HeadingSubtitle>Select an option below to start</HeadingSubtitle>
          </HeadingContainer>
          <ActionsContainer>
            <CustomButton to={`/${steps[1]}`} onClick={clearPlanner}>Start a new action plan</CustomButton>
            {
              step !== steps[0] ? (
                <CustomButton to={`/${step}`}>Resume previous action plan</CustomButton>
              ) : null
            }
          </ActionsContainer>
        </HomeContent>
      </HomeContainer>
    </PageContainer>
  )
}

export default HomePage
