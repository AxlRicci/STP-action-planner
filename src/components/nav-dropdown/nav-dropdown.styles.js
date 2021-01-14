import styled from 'styled-components'

export const DropdownContainer = styled.div`
  
  height: max-content;
  width: max-content;
  padding: 1rem 3rem;

  background-color: grey;
`

export const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  list-style: none;
`

export const DropdownListItem = styled.li`
  font-size: 1.6rem
`