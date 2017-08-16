import React from "react"
import ReactSvgLineChart from "react-svg-line-chart"
import "react-svg-line-chart/lib/index.css"

import demoHtml from "./demo.md"
import readmeHtml from "../../README.md"

const data = []

for (let x = 1; x <= 30; x++) {
  data.push({x: x, y: Math.floor(Math.random() * 100)})
}

const routes = [
  {
    path: "/",
    exact: true,
    html: readmeHtml,
    label: "Home",
  },
  {
    path: "/demo",
    demo: {
      component: <ReactSvgLineChart data={data} />,
      displayName: "ReactSvgLineChart",
      hiddenProps: ["activePoint", "data", "onPointHover"],
      html: demoHtml,
    },
    label: "Demo",
  },
  {
    path: "/linechart",
    component: <ReactSvgLineChart data={data} />,
    label: "Linechart",
  },
]

export default routes
