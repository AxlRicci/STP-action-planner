import React from 'react'
import { gql, useQuery} from '@apollo/client'
import { cartActivitiesVar } from '../../apollo/cache'

import Card from '../card/card.component';

import { CardListContainer } from './card-list.styles';

export const GET_CART_ACTIVITIES = gql`
  query GetCartActivities {
    cartActivities @client
  }
`

const CardList = ({cards, toggleInfo}) => {
  const { data, loading, error } = useQuery(GET_CART_ACTIVITIES);

  const addToCart = (_id) => {
    cartActivitiesVar([...data?.cartActivities, _id]);
  }

  const removeFromCart = (_id) => {
    const filteredActivities = cartActivitiesVar().filter(activity => activity !== _id);
    cartActivitiesVar([...filteredActivities])
  }

  const toggleActivity = (_id) => {
    if (cartActivitiesVar().includes(_id)) {
      removeFromCart(_id)
    } else {
      addToCart(_id)
    }
  }

  return (
    <CardListContainer>
      {
        cards ? (
          cards.map(({_id, name, description}) => (
            <Card
              key={_id} 
              title={name}
              description={description}
              primaryBtnTitle={ !cartActivitiesVar().includes(_id) ? "Add Activity" : "Remove Activity"}
              handlePrimaryClick={() => toggleActivity(_id)}
              secondaryBtnTitle="More Info"
              handleSecondaryClick={() => toggleInfo(_id)}
            />
          ))
        ) : null
      }
    </CardListContainer>
  )
}

export default CardList
