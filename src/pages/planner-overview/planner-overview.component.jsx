import React, { useContext, useEffect, useState } from 'react'
import { PlannerContext } from '../../contexts/plannerContext'

const PlannerOverview = () => {
  const { planner } = useContext(PlannerContext);
  const [plannerOverview, setPlannerOverview] = useState([])

  useEffect(() => {
    const data = planner.activities.reduce((acc, activity) => {
      if (!acc.some(item => item.id === activity.goalData.id)) {
        acc.push({id: activity.goalData.id, activities: [activity]})
        return acc
      } else {
        acc.find(item => item.id === activity.goalData.id).activities.push(activity)
        return acc
      }
    }, [])
    console.log(data)
    setPlannerOverview(data)
  }, [planner])


  return (
    <div>
      {
        plannerOverview.map(goal => (
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
