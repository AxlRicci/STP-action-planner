import React from 'react'

import {
  CardActionsContainer,
  CardButton,
  CardDescription,
  CardDetailsContainer,
  CardContainer,
  CardTag,
  CardTagContainer,
  CardTitle,
  TagTitle
} from './card.styles';

const Card = ({
  title,
  description,
  tags,
  primaryBtnTitle,
  handlePrimaryClick,
  secondaryBtnTitle,
  handleSecondaryClick
}) => {
  return (
    <CardContainer>
      <CardDetailsContainer>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardTagContainer>
          {
            tags ? (
              tags.map(tag => (
                <CardTag key={tag}>
                  <TagTitle>{tag}</TagTitle>
                </CardTag>
              ))
            ) : null
          }
        </CardTagContainer>
      </CardDetailsContainer>
      <CardActionsContainer>
        {
          primaryBtnTitle ? (
            <CardButton 
              onClick={
                handlePrimaryClick 
                ? handlePrimaryClick 
                : () => console.log("primary click handler not setup"
                )}
            >
              {primaryBtnTitle}
            </CardButton>
          ) : null
        }
        {
          secondaryBtnTitle ? (
            <CardButton 
              onClick={
                handleSecondaryClick
                ? handleSecondaryClick 
                : () => console.log("secondary click handler not setup.")
              }>
                {secondaryBtnTitle}
              </CardButton>
          ) : null
        }
      </CardActionsContainer>
    </CardContainer>
  )
};

export default Card;
