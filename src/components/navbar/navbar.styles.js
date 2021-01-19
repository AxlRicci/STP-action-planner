import styled from 'styled-components'
import { Link } from 'react-router-dom'

import {ReactComponent as LogoIcon } from '../../assets/img/walk.svg'

export const NavContainer = styled.nav`
  height: max-content;
  width: 100%;
  padding: 2rem;
  
  display: flex;
  justify-content: center;
`

export const Nav = styled.div`
  width: 100%;
  max-width: 144rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled(LogoIcon)`
  height: 4rem;
  width: auto;
`

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;

  position: relative;

  list-style: none;
`

export const NavItem = styled.li`
  font-size: 1.6rem;
  position: relative;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: inherit;
`

export const NavItemDropdown = styled.ul`
  height: max-content;
  width: max-content;
  padding: 1rem;

  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  background-color: #fff;
  border: 1px solid ${props => props.theme.colors.blue};
  border-radius: 1rem;
`