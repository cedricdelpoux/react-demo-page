import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import * as variables from "../../variables.js"

const Wrapper = styled.div`
  word-wrap: break-word;

  &:first-child {
    margin-top: 0;
  }

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: normal;
    color: ${({color}) => color};
  }

  a {
    color: ${({color}) => color};
  }

  p {
    margin-bottom: 1em;
  }

  ul,
  ol {
    margin-top: 0;
  }

  blockquote {
    padding: 0 1rem;
    margin-left: 0;
    border-left: 0.3rem solid ${variables.borderColor};

    > :first-child {
      margin-top: 0;
    }

    > :last-child {
      margin-bottom: 0;
    }
  }

  table {
    display: block;
    width: 100%;
    overflow: auto;
    word-break: normal;
    word-break: keep-all;

    th {
      font-weight: bold;
    }

    th,
    td {
      padding: 0.5rem 1rem;
      border: 1px solid ${variables.borderColor};
    }
  }

  dl {
    padding: 0;

    dt {
      padding: 0;
      margin-top: 1rem;
      font-size: 1rem;
      font-weight: bold;
    }

    dd {
      padding: 0;
      margin-bottom: 1rem;
    }
  }

  hr {
    height: 2px;
    padding: 0;
    margin: 1rem 0;
    background-color: ${variables.borderColor};
    border: 0;
  }
`

const Html = ({color, html}) => (
  <Wrapper color={color} dangerouslySetInnerHTML={{__html: html}} />
)

Html.propTypes = {
  color: PropTypes.string.isRequired,
  html: PropTypes.string,
}

export default Html
