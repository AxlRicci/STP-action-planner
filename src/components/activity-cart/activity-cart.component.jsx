import React from 'react'
import { gql, useQuery } from '@apollo/client';

export const GET_CART_ACTIVITIES = gql`
  query GetCartActivities {
    cartActivities @client
  }
`

const ActivityCart = () => {
  const { data, loading, error } = useQuery(GET_CART_ACTIVITIES);

  return (
    <div>
      {
        data?.cartActivities.map(activity => (
          <p>{activity}</p>
        ))
      }
    </div>
  )
}

export default ActivityCart
