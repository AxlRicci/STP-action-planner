import React, {useContext, useEffect, useState} from 'react'
import { withRouter } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client';
import { PlannerContext } from '../../contexts/plannerContext'

import ActivityInfo from '../../components/activity-info/activity-info.component';
import ActivityList from '../../components/activity-list/activity-list.component'

import {ActivitySelectionPageContainer, ActivityInfoSection, ActivityListSection, CardListContainer, GoalOverviewSection} from './activity-selection.styles'

const ActivitySelectionPage = ({location: {pathname}}) => {
  const { planner } = useContext(PlannerContext)
  const [info, setInfo] = useState(false);
  const [infoId, setInfoId] = useState(null);
  const [currentGoal, setCurrentGoal] = useState({})

  const goalId = pathname.split('/').pop()

  
  useEffect(() => {
    const goal = planner.goals.find(goal => goal.id === goalId)
    setCurrentGoal(goal)
  },[goalId, planner.goals])
  
  const toggleInfo = (activityId) => {
    if (activityId === infoId) {
      setInfo(false)
      setInfoId(null)
    } else if(activityId !== infoId) {
      setInfo(true)
      setInfoId(activityId)
    }
  };

  if (!currentGoal) return <p>Loading Goal...</p>

  return (
    <ActivitySelectionPageContainer>
      <GoalOverviewSection>
        Choose Activities for goal: {currentGoal.name}
      </GoalOverviewSection>
      <ActivityListSection info={info}>
        <ActivityList goalId={goalId} toggleInfo={toggleInfo} infoId={infoId} />
      </ActivityListSection>
      <ActivityInfoSection info={info}>
        <button type='button' onClick={() => setInfo(false)}>Close the info</button>
        <ActivityInfo id={infoId} />
      </ActivityInfoSection>
    </ActivitySelectionPageContainer>
  )
}

export default withRouter(ActivitySelectionPage)