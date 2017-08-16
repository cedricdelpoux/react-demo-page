import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import * as variables from "../../variables.js"

const Container = styled.div`
  color: #fff;
  text-align: center;
  background-color: ${({color}) => color};
  position: relative;
  padding: 1rem;

  @media ${variables.large} {
    margin-top: 5rem;
  }

  @media ${variables.medium} {
    margin-top: 3rem;
  }

  @media ${variables.small} {
    margin-top: 2rem;
  }
`

const Link = styled.a`color: #fff;`

const Footer = ({author, color}) =>
  <Container color={color}>
    {"Made by "}
    <Link href={author.email}>
      {author.name}
    </Link>
  </Container>

Footer.propTypes = {
  color: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
  }).isRequired,
}

export default Footer
