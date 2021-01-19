import React, {useContext} from 'react'
import { gql, useQuery } from '@apollo/client';
import { PlannerContext } from '../../contexts/plannerContext';

import CartItem from '../cart-item/cart-item.component'

const ActivityCart = () => {
  const { planner } = useContext(PlannerContext);

  return (
    <div>
      {
        planner?.activities.map(activity => {
          console.log(activity)
          return (
          <CartItem activityId={activity.activityId} variant="activity" />
        )})
      }
    </div>
  )
}

export default ActivityCart
