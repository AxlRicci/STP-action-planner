import styled from 'styled-components'

export const PageContainer = styled.main`
  height: 100%;
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export const GoalList = styled.ul`
  width: 100%;
  padding: 3rem;

  font-size: 1.6rem;
  list-style: none;

  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 1rem;
  background-color: #fff;

  box-shadow: ${props => props.theme.shadows.med};
`

export const GoalListItem = styled.li`
  width: 100%;
  margin-bottom: 1rem;

  font-size: 2.2rem;
  font-weight: 500;
`

export const ActivityList = styled.ol`

`

export const ActivityListItem = styled.li`
  text-decoration: underline;

  &:not(:first-child) {
    margin-top: 1rem;
  }
`

export const ActivityDataList = styled.ul`

`

export const ActivityDataItem = styled.li`

`