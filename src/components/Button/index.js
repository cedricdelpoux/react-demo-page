import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import * as variables from "../../variables.js"

const StyledButton = styled.span`
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.08);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s;

  @media ${variables.large}, ${variables.medium} {
    &:hover {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      background-color: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
    }
  }

  @media ${variables.large} {
    padding: 0.75rem 1rem;
  }

  @media ${variables.medium} {
    padding: 0.6rem 0.9rem;
    font-size: 0.9rem;
  }

  @media ${variables.small} {
    padding: 0.75rem;
    font-size: 0.9rem;
  }
`

const Button = ({children}) =>
  <StyledButton>
    {children}
  </StyledButton>

Button.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Button
export {StyledButton}
