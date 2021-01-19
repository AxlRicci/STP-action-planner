import React from 'react'

import Card from '../card/card.component';

import { CardListContainer } from './card-list.styles';

const CardList = ({
  cards, 
  title, 
  description, 
  handlePrimaryClick, 
  handleSecondaryClick,
  primaryButtonTitle, 
  secondaryButtonTitle, 
}) => {
  return (
    <CardListContainer>
      {
        cards.map((card, index) => (
          <Card
            key={index} 
            title={card[title]}
            description={card[description]}
            primaryBtnTitle={primaryButtonTitle}
            handlePrimaryClick={() => handlePrimaryClick(card)}
            secondaryBtnTitle={secondaryButtonTitle}
            handleSecondaryClick={() => handleSecondaryClick(card)}
          />
        ))
      }
    </CardListContainer>
  )
}

export default CardList
