import React from 'react'
import styled from 'styled-components'

const UserInfo = props => (
  <UserInfoContainer>
    <SectionTitle>User info</SectionTitle>
    <Avatar src={props.user.avatar_url} />
    <UserInfos>
      <li>Username: <a href={ props.user.html_url }>{ props.user.login }</a></li>
      <li>Name: { props.user.name }</li>
      <li>Blog: <a href={ props.user.blog }>{ props.user.blog }</a></li>
      <li>Company: { props.user.company }</li>
      <li>Followers: { props.user.followers }</li>
      <li>Following: { props.user.following }</li>
    </UserInfos>
  </UserInfoContainer>
)

export default UserInfo

const UserInfoContainer = styled.section`
  padding: 2em;
`

const SectionTitle = styled.h2`
  font-size: 1.6em;
  text-transform: uppercase;
  border-bottom: 1px dotted #ccc;
  margin-bottom: 1em;
`

const Avatar = styled.img`
  width: 50%;
  border-radius: .3em;
  border: 5px solid #ddd;
  margin-bottom: 2em;

  @media (min-width: 800px) {
    width: 20%;
    float: left;
    margin-right: 1em;
  }
`

const UserInfos = styled.ul`
  list-style: none;

  @media (min-width: 800px) {
    margin-top: 4em;
  }

  > li {
    margin-bottom: .2em;

    > a {
      font-weight: 700;
      text-decoration: none;
      color: #0366d6;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`
