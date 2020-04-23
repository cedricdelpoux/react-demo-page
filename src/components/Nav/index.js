import PropTypes from "prop-types"
import React, { Component } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import * as variables from "../../variables.js"
import { StyledButton } from "../Button"
import NavToggle from "../NavToggle"


const Wrapper = styled.nav`
  background: ${({color}) => color};
  position: fixed;
  font-weight: 300;
  height: 100%;
  top: 0;
  z-index: 2;
  transition: all 0.3s ease;
  padding-top: 75px;

  ${props => !props.open && "transform: translateX(-100%);"};

  @media ${variables.large}, ${variables.medium} {
    border-right: 1px solid rgba(255, 255, 255, 0.3);
    min-width: 300px;
  }

  @media ${variables.small} {
    width: 100%;
  }
`

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`

const Toggle = styled(NavToggle)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: #fff;
`

const NavButton = styled(StyledButton).attrs({as:"div"})`
border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

class Nav extends Component {
  constructor() {
    super()

    this.state = {
      open: false,
    }

    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    this.setState({open: !this.state.open})
  }

  render() {
    const {open} = this.state
    const {color, routes} = this.props
    return (
      <div>
        <Toggle onClick={this.toggleNav} open={open} />
        <Wrapper open={open} color={color}>
          <Ul>
            {routes.map((route, index) =>
              <li key={index}>
                <StyledLink to={route.path} onClick={this.toggleNav}>
                  <NavButton>
                    {route.label}
                  </NavButton>
                </StyledLink>
              </li>
            )}
          </Ul>
        </Wrapper>
      </div>
    )
  }
}

Nav.propTypes = {
  color: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Nav
