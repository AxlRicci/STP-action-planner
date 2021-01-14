import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeContainer = styled.main`
  min-height: 100vh;
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #e7e7e7;
`

export const ActionsContainer = styled.div`
  height: max-content;
  width: max-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`

export const Button = styled(Link)`
  padding: 1rem 3rem;
  
  background-color: blue;
  border-radius: 1rem;
  color: #fff;
  font-size: 1.6rem;
  text-decoration: none;
  text-align: center;
`