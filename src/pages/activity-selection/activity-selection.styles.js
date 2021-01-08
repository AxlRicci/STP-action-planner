import styled from 'styled-components';

export const ActivitySelectionPageContainer = styled.main`
  height: calc(100vh - 8rem);
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;
  padding: 1rem;

  display: grid;
  grid-template: auto 1fr 1fr / auto;
  gap: 1rem;

  background-color: #FFF;

  @media only screen and (min-width: 48em) {
    grid-template: auto 1fr / 3fr 2fr;
  }

  @media only screen and (min-width: 90em) {
    padding: 1rem 0;
  }
`

export const GoalOverviewSection = styled.section`
  height: min-content;
  width: 100%;
  padding: 1rem;

  grid-area: 1 / 1 / 2 / 3;

  background-color: blue;
  border-radius: 1rem;
`

export const ActivityListSection = styled.section`
  height: 100%;
  width: 100%;
  padding: 1rem;
  
  grid-area: 2 / 1 / ${props => props.info ? "3" : "4"} / 3;

  background-color: #e7e7e7;
  border-radius: 1rem;

  overflow-y: hidden;
  overflow-x: hidden;

  @media only screen and (min-width: 48em) {
    grid-area: 2 / 1 / 3 / ${props => props.info ? "2" : "3"};
  }
`

export const ActivityInfoSection = styled.section`
  height: 100%;
  width: ${props => props.info ? "100%" : "0%" };
  padding: ${props => props.info ? "1rem" : "0"};

  grid-area: 3 / 1 / 4 / 3;

  background-color: #e7e7e7;
  border-radius: 1rem;

  overflow: hidden;

  @media only screen and (min-width: 48em) {
    grid-area: 2 / 2 / 3 / 3;
  }
`