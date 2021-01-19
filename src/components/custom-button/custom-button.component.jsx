import React from 'react'

import { CustomButtonContainer, CustomLinkContainer } from './custom-button.styles'

const CustomButton = ({
  big,
  iconAfter,
  iconBefore,
  toggled,
  children,
  primaryBgColor,
  primaryColor,
  secondaryBgColor,
  secondaryColor,
  onClick,
  to,
}) => {
  if (to) {
    return (
      <CustomLinkContainer to={to} onClick={onClick} toggled={!toggled} big={big}>
        {/* {iconBefore ? <Icon iconBefore={iconBefore} /> : null} */}
        {children}
        {/* {iconAfter ? <Icon iconAfter={iconAfter} /> : null} */}
      </CustomLinkContainer>
    )
  } else {
    return (
      <CustomButtonContainer onClick={onClick} toggled={!toggled} big={big}>
        {/* {iconBefore ? <Icon iconBefore={iconBefore} /> : null} */}
        {children}
        {/* {iconAfter ? <Icon iconAfter={iconAfter} /> : null} */}
      </CustomButtonContainer>
    )
  }
}

export default CustomButton
