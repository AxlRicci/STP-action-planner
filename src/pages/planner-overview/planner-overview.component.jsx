import React, { useContext, useEffect, useState } from 'react'
import { PlannerContext } from '../../contexts/plannerContext'

import { PageContainer, GoalList, GoalListItem, ActivityList, ActivityListItem, ActivityDataList, ActivityDataItem } from './planner-overview.styles'

const PlannerOverview = () => {
  const { planner } = useContext(PlannerContext);
  const [plannerOverview, setPlannerOverview] = useState([])

  useEffect(() => {
    const goals = planner.activities.reduce((acc, activity) => {
      if (!acc.some(item => item.id === activity.goalData.id)) {
        acc.push({id: activity.goalData.id, name: activity.goalData.name, activities: [activity]})
        return acc
      } else {
        acc.find(item => item.id === activity.goalData.id).activities.push(activity)
        return acc
      }
    }, [])
    const sortedGoals = goals.sort((a,b) => a.name.localeCompare(b.name))
    setPlannerOverview(sortedGoals)
  }, [planner])


  return (
    <PageContainer>
      {
        plannerOverview.map(goal => (
          <GoalList>
            <GoalListItem>{goal.name}</GoalListItem>
            <ActivityList>
              {
                goal.activities.map(activity => (
                  <>
                    <ActivityListItem>{activity.name}</ActivityListItem>
                    {
                      activity?.activityData.description ? (
                        <ActivityDataList>
                          <ActivityDataItem>{activity.activityData.description}</ActivityDataItem>
                        </ActivityDataList>
                      ) : null
                    }
                  </>
                ))
              }
            </ActivityList>
          </GoalList>
        ))
      }
    </PageContainer>
  )
}

export default PlannerOverview
