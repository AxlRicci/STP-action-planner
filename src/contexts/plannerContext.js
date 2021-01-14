import React, {useEffect, useState, createContext} from 'react'

export const PlannerContext = createContext();

const initialState = {step: 'goal-selection', activities: [], goals: []}
const steps = ['goal-selection', 'plan-overview', 'plan-share'];

const PlannerContextProvider = ({children}) => {
  const [planner, setPlanner] = useState(initialState);

  // get planner object from Local Storage.
  useEffect(() => {
    const data = localStorage.getItem('planner');
    if (data) {
      setPlanner(JSON.parse(data));
    }
  },[])

  // set local storage.
  useEffect(() => {
    localStorage.setItem('planner', JSON.stringify(planner))
  }, [planner])

  // Planner utility functions.
  const clearPlanner = () => {
    setPlanner(initialState);
  }

  const updatePlannerStep = (step) => {
    setPlanner({...planner, step})
  }

  const stepNavigation = (currentStep, direction) => {
    const stepNum = steps.indexOf(currentStep);
    const nextStep = steps[stepNum + 1]
    const prevStep = steps[stepNum - 1]
    console.log(prevStep, nextStep)
    if (direction === 'next' && nextStep) {
      updatePlannerStep(nextStep)
      return nextStep.split(" ").join("-")
    }

    if (direction === 'prev' && prevStep) {
      updatePlannerStep(prevStep)
      return prevStep
    }
  }

  const addGoal = (goal) => {
    if (!planner.goals.some(goal => goal.id === goal._id)) {
      setPlanner({
        ...planner,
        goals: [...planner.goals, {id: goal._id, name: goal.name, goalData: goal}]
      })
      steps.splice(1, 0, `activity-selection/${goal.name}`)
    }
  }

  const addActivity = (activity, goal) => {
    if (!planner.activities.some(activity => activity.id === activity._id)) {
      setPlanner({
        ...planner,
        activities: [
          ...planner.activities,
          {
            id: activity._id, 
            name: activity.name,
            activityData: activity,
            goalData: {
              ...goal,
              id: goal._id
            }
          }
        ],
      })
    }
  }

  const removeActivity = (activityId) => {
    setPlanner({
      ...planner,
      activities: [...planner.activities.filter(activity => activity.id !== activityId)]
    })
  }

  const removeGoal = (goalId) => {
    setPlanner({
      ...planner, 
      activities: [...planner.activities.filter(activity => activity.goalData.id !== goalId)],
      goals: [...planner.goals.filter(plannerGoal => plannerGoal.id !== goalId)]
    })
  }

  return (
    <PlannerContext.Provider value={{planner, clearPlanner, updatePlannerStep, stepNavigation, addGoal, removeGoal, addActivity, removeActivity}}>
      {children}
    </PlannerContext.Provider>
  )
}

export default PlannerContextProvider
