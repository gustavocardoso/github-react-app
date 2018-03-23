import React from 'react'
import styled from 'styled-components'

import Repos from './github/Repos'
import './App.css'

const App = () => (
  <div className='wrapper'>
    <AppTitle>Github React App</AppTitle>
    <AppDescription>Type a valid Github user name and press ENTER</AppDescription>
    <Repos />
  </div>
)

export default App

const AppTitle = styled.h1`
  font-size: 2.6em;
`

const AppDescription = styled.p`
  font-size: 1.6em;
  font-weight: 300;
  color: #777;
`
