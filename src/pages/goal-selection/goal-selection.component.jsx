import React from 'react'

import CardList from '../../components/card-list/card-list.component';

import { PageContainer, GoalSelectionContainer } from './goal-selection.styles';

const GoalSelectionPage = () => {
  return (
    <PageContainer>
      <GoalSelectionContainer>
        <CardList />
      </GoalSelectionContainer>
    </PageContainer>
  )
}

export default GoalSelectionPage;
