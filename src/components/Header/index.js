import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import * as variables from "../../variables.js"

import OctocatCorner from "../OctocatCorner"
import {StyledButton} from "../Button"

const Container = styled.div`
  color: #fff;
  text-align: center;
  background-color: ${({color}) => color};
  position: relative;

  @media ${variables.large} {
    padding: 5rem;
    margin-bottom: 5rem;
  }

  @media ${variables.medium} {
    padding: 3rem;
    margin-bottom: 3rem;
  }

  @media ${variables.small} {
    padding: 3rem 2rem 2rem;
    margin-bottom: 2rem;
  }
`

const Title = styled.div`
  color: #fff;
  margin-top: 0;

  @media ${variables.large} {
    font-size: 3.25rem;
  }

  @media ${variables.medium} {
    font-size: 2.25rem;
  }

  @media ${variables.small} {
    font-size: 1.75rem;
  }
`

const Buttons = styled.div`margin-top: 1rem;`

const NavButton = StyledButton.extend`
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-decoration: none;
  display: inline-block;
  text-align: center;

  & + & {
    margin-left: 1rem;
  }

  @media ${variables.small} {
    display: block;
    width: 100%;

    & + & {
      margin-left: 0;
      margin-top: 1rem;
    }
  }
`

const NavButtonLink = NavButton.withComponent("a")

const CornerLink = styled.a`
  position: absolute;
  top: 0;
  border: 0;
  right: 0;
`

const Header = ({buttons, color, octocat, title}) =>
  <Container color={color}>
    <Title>
      {title}
    </Title>
    {buttons &&
      <Buttons>
        {buttons.map((button, index) =>
          <NavButtonLink key={index} href={button.url}>
            {button.label}
          </NavButtonLink>
        )}
      </Buttons>}
    {octocat &&
      octocat.url &&
      <CornerLink href={octocat.url}>
        <OctocatCorner color={color} />
      </CornerLink>}
  </Container>

Header.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  color: PropTypes.string.isRequired,
  octocat: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
}

export default Header
