import styled from 'styled-components';

export const PageContainer = styled.main`
  height: calc(100vh - 8rem);
  width: 100%;
  max-width: 144rem;
  padding: 1rem;
  margin: 0 auto;

  display: grid;
  grid-template-rows: auto 1fr 1fr;
  grid-template-columns: auto;
  gap: 2rem;

  @media only screen and (min-width: 48em) {
    grid-template-columns: 3fr 2fr;
    grid-template-rows: auto minmax(0, 1fr);
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: ${props => props.theme.colors.blue};
  border-radius: 1rem;
`

export const GoalHeading = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin: 0
`

export const GoalTitle = styled.h3`
  font-size: 3.5rem;
  font-weight: 200;
  margin: 1rem 0 0 0;
`

export const ActivityListSection = styled.section`
  grid-area: 2 / 1 / ${props => props.info ? "3" : "4"} / 3;

  @media only screen and (min-width: 48em) {
    grid-area: 2 / 1 / 3 / ${props => props.info ? "2" : "3"};
  }
`

export const ActivityInfoSection = styled.section`
  height: 100%;
  width: ${props => props.info ? "100%" : "0%" };
  padding: ${props => props.info ? "1rem" : "0"};

  grid-area: 3 / 1 / 4 / 3;

  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 1rem;


  overflow: hidden;

  @media only screen and (min-width: 48em) {
    grid-area: 2 / 2 / 3 / 3;
  }
`