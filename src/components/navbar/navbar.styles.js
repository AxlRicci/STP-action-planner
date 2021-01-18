import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

export const Logo = styled.img`
  height: 6rem;
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
  padding: 1rem 3rem;

  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: grey;
`

export const NavActions = styled.div`
  width: max-content;
  height: max-content;

  display: flex;
  gap: 2rem;
`

export const NavButton = styled.button`

`