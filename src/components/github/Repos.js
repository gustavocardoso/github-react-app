import React, { Component } from 'react'
import styled from 'styled-components'

import { getRepos, getUerInfo } from '../../services/http'
import ReposList from './ReposList'
import UserInfo from './UserInfo'

class Repos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      repos: [],
      username: '',
      userInfo: null
    }
  }

  handleChange = (ev) => {
    this.setState({ username: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()

    this.setState({ repos: [] })
    this.setState({ userInfo: null })

    const userRepos = getRepos(this.state.username)

    const userInfo = getUerInfo(this.state.username)

    Promise.all([userInfo, userRepos])
      .then(res => {
        this.setState({ userInfo: res[0].data })
        this.setState({ repos: res[1].data })
      })
  }

  render() {
    return (
      <div>
        <SearchFormContainer>
          <form onSubmit={ this.handleSubmit }>
            <GitUserName
              type='text'
              onChange={ this.handleChange }
              placeholder='username + enter'
            />
          </form>
        </SearchFormContainer>

        {
          this.state.userInfo !== null &&
          <UserInfo user={ this.state.userInfo } />
        }

        <ReposContainer>
          {
            this.state.repos.length === 0 &&
            <p>Waiting for you to enter a username...</p>
          }

          {
            this.state.repos.length > 0 &&
            <div>
              <SectionTitle>Repos</SectionTitle>
              <ReposList repos={ this.state.repos }></ReposList>
            </div>
          }
        </ReposContainer>
      </div>
    )
  }
}

export default Repos

const SearchFormContainer = styled.section`
  background: #1e2226;
  padding: .2em 2em;
`

const GitUserName = styled.input`
  width: 280px;
  font-size: 1em;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.75);
  background: #404448;
  border: 0;
  border-radius: .3em;
  padding: .5em;
  margin: 1em 0;
`

const ReposContainer = styled.section`
  padding: 2em;
`

const SectionTitle = styled.h2`
  font-size: 1.6em;
  text-transform: uppercase;
  border-bottom: 1px dotted #ccc;
  margin-bottom: 1em;
  clear: left;
`
