import styled from 'styled-components';

export const ActivityInfoContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  overflow-y: scroll;
`

export const ActivityTitle = styled.h2`
  font-size: 4rem;
  font-weight: 600;

  margin: 0;
`

export const ActivityDescription = styled.p`
  font-size: 1.6rem;
`

export const ActivityTargetContainer = styled.div`
  height: min-content;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`

export const ActivityTargetTitle = styled.p`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 400;
`

export const ActivityTargetItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
`

export const ActivityTargetItem = styled.p`
  width: max-content;
  margin: 0;

  font-size: 1.4rem;
  text-transform: capitalize;
  padding: .5rem 1rem;

  background-color: ${props => props.theme.colors.orange};
  color: #fff;
  border-radius: 1rem;
`

export const ActivityUnorderedList = styled.ul`
  
`

export const ActivityOrderedList = styled.ol`
  display: ${({toggled}) => toggled ? "none" : "block"};
`

export const ActivityListItem = styled.li`
  font-size: 1.6rem;
  
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`