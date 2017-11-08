import PropTypes from "prop-types"
import React, {Component} from "react"
import {loadEditorTheme} from "react-interactive-component"
import {BrowserRouter} from "react-router-dom"
import styled, {injectGlobal} from "styled-components"

import * as variables from "./variables.js"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Routes from "./components/Routes"
import Html from "./components/Html"

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #606c71;
  }

  pre[class*="language-"],
  code[class*="language-"] {
    box-shadow: none;
    border: none;
    border-radius: 0;
  }
`

const Container = styled.div`
  @media ${variables.large} {
    max-width: 64rem;
    padding: 0 6rem;
    margin: 0 auto;
    font-size: 1.1rem;
  }

  @media ${variables.medium} {
    padding: 0 4rem;
    font-size: 1.1rem;
  }

  @media ${variables.small} {
    padding: 0 1rem;
    font-size: 1rem;
  }
`

class ReactDemoPage extends Component {
  constructor({editorTheme, pages}) {
    super()

    if (this.hasSomeDemoPages(pages)) {
      if (editorTheme) {
        loadEditorTheme(editorTheme)
      } else {
        loadEditorTheme()
      }
    }
  }

  hasSomeDemoPages(pages) {
    return pages.some(page => page.demo && page.demo.component)
  }

  render() {
    const {basename, color, pages, footer, header} = this.props
    return (
      <BrowserRouter basename={basename}>
        <div>
          {header && <Header {...header} color={color} />}
          <Nav routes={pages} color={color} />
          <Container>
            <Routes routes={pages} color={color} />
          </Container>
          {footer && <Footer {...footer} color={color} />}
        </div>
      </BrowserRouter>
    )
  }
}

ReactDemoPage.propTypes = {
  basename: PropTypes.string,
  header: PropTypes.shape({
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
    title: PropTypes.string.isRequired,
  }),
  footer: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  }),
  color: PropTypes.string,
  editorTheme: PropTypes.string,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.element,
      demo: PropTypes.shape({
        component: PropTypes.element.isRequired,
      }),
      html: PropTypes.string,
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
}

ReactDemoPage.defaultProps = {
  basename: null,
  color: variables.mainColor,
  footer: null,
  header: null,
}

export default ReactDemoPage
export {Html}
