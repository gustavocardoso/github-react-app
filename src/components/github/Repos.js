import React, { Component } from 'react'

import { getRepos } from '../../services/http'
import ReposList from './ReposList'

class Repos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      repos: [],
      username: ''
    }
  }

  handleChange = (event) => {
    this.setState({ username: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({ repos: [] })

    getRepos(this.state.username)
    .then(res => this.setState({ repos: res.data }))
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor='username'>User name: </label>
          <input
            type='search'
            placeholder='type here and pres ENTER'
            style={{ width: '200px' }}
            onChange={ this.handleChange }
          />
        </form>
        <h2>Repos</h2>
        <ReposList repos={ this.state.repos }></ReposList>
      </div>
    )
  }
}

export default Repos
