import React, { useContext } from 'react'
import { PlannerContext } from '../../contexts/plannerContext'

const PlannerOverview = () => {
  const { planner } = useContext(PlannerContext);

  const data = planner.activities.reduce((acc, activity) => {
    if (!acc.some(item => item.id === activity.goalData.goalId)) {
      acc.push({id: activity.goalData.goalId, activities: [activity]})
      return acc
    } else {
      acc.find(item => item.id === activity.goalData.goalId).activities.push(activity)
      return acc
    }
  }, [])

  console.log(data)

  return (
    <div>
      {
        data.map(goal => (
          <ul>
            <li>{goal.id}</li>
            <ul>
              {
                goal.activities.map(activity => (
                  <li>{activity.name}</li>
                ))
              }
            </ul>
          </ul>
        ))
      }
    </div>
  )
}

export default PlannerOverview
