import React from 'react'
import ReactDOM from 'react-dom'

import { injectGlobal } from 'styled-components'

import App from './components/App'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font: normal normal 16px/1.5 'Open Sans', sans-serif;
    color: #222;
    background: #eee;
  }

  h1, h2, h3, h4 {
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
  }

  ul {
    list-style-position: inside;
  }
`
