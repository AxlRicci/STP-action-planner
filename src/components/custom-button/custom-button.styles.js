import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CustomButtonContainer = styled.button`
  padding: ${props => props.big 
    ? "2rem 6rem" : "1rem 3rem"};

  background-color: ${props => props.toggled 
    ? props.primaryBgColor || props.theme.colors.green 
    : props.secondaryBgColor || props.theme.colors.burntOrange
  };

  color: ${props => props.toggled 
    ? props.primaryColor || props.theme.colors.black 
    : props.secondaryColor || props.theme.colors.white
  };

  font-size: ${props => props.big 
    ? "2.2rem"
    : "1.6rem"
  };
  border-radius: 1rem;
  border: none;
`


export const CustomLinkContainer = styled(Link)`
  padding: ${props => props.big 
    ? "2rem 6rem" : "1rem 3rem"};

  background-color: ${props => props.toggled 
    ? props.primaryBgColor || props.theme.colors.green 
    : props.secondaryBgColor || props.theme.colors.burntOrange
  };

  color: ${props => props.toggled 
    ? props.primaryColor || props.theme.colors.black 
    : props.secondaryColor || props.theme.colors.white
  };

  font-size: ${props => props.big 
    ? "2.2rem"
    : "1.6rem"
  };
  border-radius: 1rem;
  border: none;
  text-decoration: none;
  text-align: center;
`