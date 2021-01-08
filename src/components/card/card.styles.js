import styled from 'styled-components';

export const CardContainer = styled.div`
  height: min-content;
  width: 100%;
  padding: 2rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  background-color: white;
  border-radius: 1rem;
  box-shadow: .5rem .5rem .5rem 0 rgba(0,0,0, .15);

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 48em) {
    flex-direction: row;
    gap: 5rem;
  }
`
export const CardDetailsContainer = styled.div`
  height: min-content;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  text-align: center;

  @media only screen and (min-width: 48em) {
    text-align: left;
  }
`

export const CardTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: .25rem;
  width: 100%;
`

export const CardDescription = styled.p`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 400;
`

export const CardTagContainer = styled.div`
  height: max-content;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  @media only screen and (min-width: 48em) {
    justify-content: flex-start;
  }
`

export const CardTag = styled.div`
  height: min-content;
  width: max-content;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1.5rem;
  background-color: #e7e7e7;
`

export const TagTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1;
  margin: 0;
`

export const CardActionsContainer = styled.div`
  height: max-content;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: 48em) {
    width: 40%;
  }

  @media only screen and (min-width: 64em) {
    width: 30%;
  }

  @media only screen and (min-width: 90em) {
    width: 25%;
  }
`

export const CardButton = styled.button`

  padding: 1rem 3rem;

  font-size: 1.6rem;
  color: #fff;
  
  background-color: blue;
  border-radius: 2rem;
  border: none;
  box-shadow: .25rem .5rem .5rem 0px rgba(0,0,0, 0.15);

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`