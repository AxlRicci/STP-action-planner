import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const PageContainer = styled.div`
  height: calc(100vh - 8rem);
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  
  background-color: ${props => props.theme.colors.white};
  
  @media only screen and (min-width: 48em) {
    padding: 1rem;
  }
`

export const HomeContainer = styled.main`
  height: 100%;
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HomeContent = styled.div`
  padding: 3rem;

  background-color: #fff;
  border-radius: 1rem;
  box-shadow: ${props => props.theme.shadows.lrg};
`

export const HeadingContainer = styled.div`
  height: max-content;
  width: max-content;
  margin-bottom: 3rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const HeadingTitle = styled.h1`
  margin: 0;
  font-size: 5rem;
  font-weight: 500;
`

export const HeadingSubtitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
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
  
  background-color: ${props => props.theme.colors.green};
  border-radius: 1rem;
  color: ${props => props.theme.colors.black};
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
`