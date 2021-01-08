import styled from 'styled-components';

export const PageContainer = styled.div`
  height: calc(100vh - 8rem);
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  
  @media only screen and (min-width: 48em) {
    padding: 1rem;
  }
`

export const GoalSelectionContainer = styled.main`
  height: 100%;
  width: 100%;
  max-width: 144rem;
  padding: 1rem;

  background-color: #e7e7e7;
  

  @media only screen and (min-width: 48em) {
    border-radius: 1rem;
  }
`