import styled from 'styled-components';

export const PageContainer = styled.div`
  height: calc(100vh - 8rem);
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  
  background-color: ${props => props.theme.colors.white};
  
  @media only screen and (min-width: 48em) {
    padding: 1rem;
  }
`

export const GoalSelectionContainer = styled.main`
  height: 100%;
  width: 100%;
  max-width: 144rem;
  padding: 1rem;
  

  @media only screen and (min-width: 48em) {
    border-radius: 1rem;
  }
`

export const CardListContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 1rem;

  overflow-y: scroll;
  overflow-x: visible;
`