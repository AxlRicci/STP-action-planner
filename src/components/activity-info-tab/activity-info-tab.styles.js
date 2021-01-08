import styled from 'styled-components';
import { AiFillCaretRight, AiOutlineRotateLeft } from "react-icons/ai";

export const Tab = styled.div`
  height: auto;
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: #fff;
  border: 1px solid grey;
  border-radius: 1rem;
`

export const TabHeader = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const TabTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 0;
  text-transform: capitalize;
`

export const TabBody = styled.div`
  height: auto;
  width: 100%;
  display: ${({isToggled}) => isToggled ? "block" : "none"};
`
export const TabToggle = styled(AiFillCaretRight)`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 1rem;

  transform: ${({isToggled}) => isToggled ? "rotate(90deg)" : "rotate(0deg)"};
`

export const TabOrderedList = styled.ol`

`

export const TabUnorderedList = styled.ul`

`

export const TabListItem = styled.li`
  font-weight: ${({strong}) => strong ? "600" : "400"};
`

export const TabParagraph = styled.p`

`

export const TabLink = styled.a`

`

export const TabButton = styled.button`

`