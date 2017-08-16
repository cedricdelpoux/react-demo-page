import PropTypes from "prop-types"
import React from "react"

import ReactInteractiveComponent, {
  loadEditorTheme,
} from "react-interactive-component"

import Html from "../Html"

loadEditorTheme()

const Demo = ({color, html, ...demoProps}) =>
  <div>
    {html && <Html color={color} html={html} />}
    <ReactInteractiveComponent tabsColor={color} {...demoProps} />
  </div>

Demo.propTypes = {
  color: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
  html: PropTypes.string,
}

export default Demo
