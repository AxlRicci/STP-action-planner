import React, { useContext, useEffect, useState } from 'react'
import { gql, useLazyQuery } from '@apollo/client';
import { PlannerContext } from '../../contexts/plannerContext'

import { ActivityListContainer } from './activity-list.styles'

import Card from '../../components/card/card.component'

const GET_ACTIVITIES = gql`
  query allActivity($exArray: [ID!]) {
    allActivity(where: {_id: {nin: $exArray}}) {
      _id
      name
      category
      description
    }
  }
` 

const ActivityList = ({goalId, infoId, toggleInfo }) => {
  const { planner, addActivity, removeActivity } = useContext(PlannerContext)
  const [getNewList, { loading, error, data }] = useLazyQuery(GET_ACTIVITIES)
  const [oldGoalId, setOldGoalId] = useState(null)

  useEffect(() => {
    if (goalId !== oldGoalId) {
      setOldGoalId(goalId)
      const goalActivityList = planner.activities.filter(activity => activity.goalData.id !== goalId)
      const exArray = goalActivityList.length > 0 ? goalActivityList.map(activity => activity.id) : ['1']
      getNewList({variables: {exArray}})
    }
  }, [goalId, oldGoalId, getNewList, planner.activities])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  return (
    <ActivityListContainer>
      {
        data?.allActivity.map(activity => {
          const isInPlanner = planner.activities.some(plannerActivity => plannerActivity.id === activity._id)
          return (
          <Card 
            title={activity.name}
            description={activity.description}
            primaryBtnTitle={ !isInPlanner? ("Add Activity") : ("Remove Activity") }
            handlePrimaryClick={() => !isInPlanner ? addActivity(activity, goalId) : removeActivity(activity._id)}
            secondaryBtnTitle={infoId === activity._id ? "Less Info" : "More Info"}
            handleSecondaryClick={() => toggleInfo(activity._id)}
          />
        )})
      }
    </ActivityListContainer>
  )
}

export default ActivityList
