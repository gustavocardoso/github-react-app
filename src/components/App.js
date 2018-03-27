import React from 'react'
import styled, { keyframes } from 'styled-components'

import Repos from './github/Repos'

import logo from '../logo.svg'

const App = () => (
  <Wrapper>
    <Header>
      <AppTitle highlight>Github React App</AppTitle>
      <Logo src={ logo } />
      <AppDescription>A simple app to show info and repos from a user</AppDescription>
    </Header>
    <Repos />
  </Wrapper>
)

export default App

const Wrapper = styled.div`
  margin: 0;
`

const Header = styled.header`
  background: #24292E;
  padding: 2em;
`

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = styled.img`
  display: inline-block;
  width: 60px;
  animation: ${ spin } infinite 20s linear;
`

const AppTitle = styled.h1`
  display: inline-block;
  font-size: 2.6em;
  color: ${ props => props.highlight ? 'rgba(255,255,255,0.90)' : '#222' };
`

const AppDescription = styled.p`
  font-size: 1.4em;
  font-weight: 300;
  color: #777;
`
