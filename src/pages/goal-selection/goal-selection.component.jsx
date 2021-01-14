import React, { useContext } from 'react'
import { gql, useQuery } from '@apollo/client'
import { PlannerContext } from '../../contexts/plannerContext'

import { PageContainer, GoalSelectionContainer, CardListContainer } from './goal-selection.styles';
import Card from '../../components/card/card.component';

const GET_GOALS = gql`
  {
    allGoal {
      _id
      name
      category
      supportTarget
    }
  }
`

const GoalSelectionPage = () => {
  const {loading, error, data } = useQuery(GET_GOALS);
  const {planner, addGoal, removeGoal} = useContext(PlannerContext)

  if (loading) return <p>Spinner...</p>
  if (error) return <p>Error...</p>

  return (
    <PageContainer>
      <GoalSelectionContainer>
        <CardListContainer>
          {
            data.allGoal.map(goal => {
              const isInPlanner = planner.goals.some(plannerGoal => plannerGoal.id === goal._id);
              return (
              <Card
                key={goal._id}
                title={goal.name}
                primaryBtnTitle={!isInPlanner ? "Add Goal" : "Remove Goal"}
                handlePrimaryClick={() => !isInPlanner ? addGoal(goal) : removeGoal(goal._id)}
                description={goal.description}
                tags={goal.supportTarget}
              />
            )})
          }
        </CardListContainer>
      </GoalSelectionContainer>
    </PageContainer>
  )
}

export default GoalSelectionPage;
