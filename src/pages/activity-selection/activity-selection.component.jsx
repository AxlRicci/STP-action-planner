import React, {useContext, useState} from 'react'
import { withRouter } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client';
import { PlannerContext } from '../../contexts/plannerContext'

import ActivityInfo from '../../components/activity-info/activity-info.component';
import Card from '../../components/card/card.component';

import {ActivitySelectionPageContainer, ActivityInfoSection, ActivityListSection, CardListContainer, GoalOverviewSection} from './activity-selection.styles'

const GET_ACTIVITIES = gql`
  {
    allActivity {
      _id
      name
      category
      description
    }
  }
` 

const ActivitySelectionPage = ({location: {pathname}}) => {
  const [info, setInfo] = useState(false);
  const [infoId, setInfoId] = useState('');
  const {loading, error, data } = useQuery(GET_ACTIVITIES);
  const { planner, addActivity, removeActivity } = useContext(PlannerContext)
  const goalId = pathname.split('/').pop()
  console.log("goalId: ", goalId)


  const toggleInfo = (activityId) => {
    setInfoId(activityId);
    setInfo(true);
  };

  if (loading) return <p>Spinner...</p>
  if (error) return <p>Error...</p>

  return (
    <ActivitySelectionPageContainer>
      <GoalOverviewSection>
        CURRENT GOAL
      </GoalOverviewSection>
      <ActivityListSection info={info}>
        <CardListContainer>
          {
            data.allActivity.map(activity => {
              const isInPlanner = planner.activities.some(plannerActivity => plannerActivity.id === activity._id);
              return (
              <Card 
                title={activity.name}
                description={activity.description}
                primaryBtnTitle={ !isInPlanner? ("Add Activity") : ("Remove Activity") }
                handlePrimaryClick={() => !isInPlanner ? addActivity(activity, goalId) : removeActivity(activity._id)}
                secondaryBtnTitle={!info ? "More Info" : "Less Info"}
                handleSecondaryClick={() => !info ? toggleInfo(activity._id) : setInfo(false)}
              />
            )})
          }
        </CardListContainer>
      </ActivityListSection>
      <ActivityInfoSection info={info}>
        <button type='button' onClick={() => setInfo(false)}>Close the info</button>
        <ActivityInfo id={infoId} />
      </ActivityInfoSection>
    </ActivitySelectionPageContainer>
  )
}

export default withRouter(ActivitySelectionPage)
