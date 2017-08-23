# react-demo-page

[![npm package][npm-badge]][npm]
[![Travis][build-badge]][build]
[![Codecov][codecov-badge]][codecov]
![Module formats][module-formats]

ReactDemoPage let you build a demo page for your react component with ease

## Getting started

[![react-demo-page](https://nodei.co/npm/react-demo-page.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-demo-page/)

You can download `react-demo-page` from the NPM registry via the `npm` or `yarn` commands

```shell
yarn add react-demo-page
npm install react-demo-page --save
```

If you don't use package manager and you want to include `react-demo-page` directly in your html, you could get it from the UNPKG CDN

```html
https://unpkg.com/react-demo-page/dist/react-demo-page.min.js.
```

## Usage

```javascript
import React from "react"
import ReactDemoPage from "react-demo-page"
import YourReactComponent from "./src/YourReactComponent"
import pkg from "../package.json"

const routes = [
  // A page with only html
  {
    path: "/",
    exact: true,
    html: html,
    label: "Home",
  },
  // A page with demo component and html as presentation
  {
    path: "/demo",
    demo: {
      component: <YourReactComponent />,
      html: html,
    },
    label: "Demo",
  },
  // A custom page
  {
    path: "/myCustomPage",
    component: (
      <div>
        <h2>{"Title"}</h2>
        <YourReactComponent />
      </div>
    ),
    label: "Custom page",
  },
]

const header = {
  title: pkg.name,
  buttons: [
    {label: "Github", url: pkg.homepage},
    {label: "Npm", url: `https://www.npmjs.com/package/${pkg.name}`},
    {label: "Download", url: `${pkg.homepage}/archive/master.zip`},
  ],
}

const footer = {
  author: pkg.author,
}

const Demo = () =>
  <ReactDemoPage
    basename={pkg.name} // You need this if you deploy on Github page
    header={header}
    footer={footer}
    pages={routes}
    color="#3498db"
  />
```

If you need to watch and build your demo page to deploy it but you don`t want a lot of configuration, I recommend you to use [nwb](https://github.com/insin/nwb) and [gh-pages](https://github.com/tschaub/gh-pages):

```shell
yarn add nwb gh-pages --dev
```

and add these scripts to your `package.json`:
```json
{
  "scripts": {
    "demo:start": "nwb react run {DEMO_PATH}",
    "demo:build": "nwb react build {DEMO_PATH}",
    "demo:deploy": "gh-pages -d {DEMO_DIST_PATH}"
  }
}
```

## Demo

See [Demo page][github-page]

## Contributing

* ⇄ Pull/Merge requests and ★ Stars are always welcome.
* For bugs and feature requests, please [create an issue][github-issue].
* Pull requests must be accompanied by passing automated tests (`npm test`).

See [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines

## Changelog

See [changelog](./CHANGELOG.md)

## License

This project is licensed under the MIT License - see the [LICENCE.md](./LICENCE.md) file for details

[npm-badge]: https://img.shields.io/npm/v/react-demo-page.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-demo-page

[build-badge]: https://img.shields.io/travis/xuopled/react-demo-page/master.svg?style=flat-square
[build]: https://travis-ci.org/xuopled/react-demo-page

[codecov-badge]: https://img.shields.io/codecov/c/github/xuopled/react-demo-page.svg?style=flat-square
[codecov]: https://codecov.io/gh/xuopled/react-demo-page

[module-formats]: https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg?style=flat-square

[github-page]: https://xuopled.github.io/react-demo-page
[github-issue]: https://github.com/xuopled/react-demo-page/issues/new
