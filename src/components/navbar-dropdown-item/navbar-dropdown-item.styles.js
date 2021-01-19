import styled from 'styled-components'
import { AiOutlineCloseCircle } from 'react-icons/ai'


export const NavItem = styled.li`
  padding: .5rem 1rem;
  font-size: 1.6rem;

  display: flex;
  align-items: center;

  position: relative;

  border-radius: 2rem;

  transition: .2s all;

  &:hover {
    background-color: ${props => props.theme.colors.white};
  }

`

export const CloseIcon = styled(AiOutlineCloseCircle)`
  width: auto;
  height: 2rem;
  margin-left: 1rem;
  fill: ${props => props.theme.colors.red};

  opacity: 0;
  transition: .2s all;

  ${NavItem}:hover & {
    opacity: 1;
  }
`