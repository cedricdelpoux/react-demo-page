import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Button = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 60px;
  height: 60px;
  border: 0;
  background: none;
  cursor: pointer;
`

const Icon = styled.span`
  width: ${props => (props.open ? "0" : "30px")};
  height: 4px;
  background-color: white;
  position: absolute;
  top: 28px;
  left: 15px;
  transition-duration: 0.3s;

  &:before,
  &:after {
    width: 30px;
    height: 4px;
    background-color: white;
    content: "";
    position: absolute;
    left: 0;
    transition-duration: 0.3s;
    transition-timing-function: swing;
  }

  &:before {
    top: -9px;
    transform: ${props => (props.open ? "translateY(9px) rotate(45deg)" : "")};
  }

  &:after {
    top: 9px;
    transform: ${props =>
      props.open ? "translateY(-9px) rotate(-45deg)" : ""};
  }
`

const NavToggle = ({onClick, open}) =>
  <Button onClick={onClick}>
    <Icon open={open} />
  </Button>

NavToggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default NavToggle
