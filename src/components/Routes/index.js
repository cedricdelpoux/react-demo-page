import PropTypes from "prop-types"
import React from "react"
import {Route} from "react-router-dom"
import Demo from "../Demo"
import Html from "../Html"

const Routes = ({color, routes}) =>
  <div>
    {routes.map((route, index) => {
      const {component, demo, html, ...routeProps} = route
      let RenderComp

      if (html) {
        RenderComp = <Html color={color} html={html} />
      }

      if (demo && demo.component) {
        RenderComp = <Demo {...demo} color={color} />
      }

      if (component) {
        RenderComp = component
      }

      return (
        RenderComp &&
        <Route key={index} render={() => RenderComp} {...routeProps} />
      )
    })}
  </div>

Routes.propTypes = {
  color: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Routes
