import React from 'react'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Dustin Ewers`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Dustin Ewers</strong> who lives and works in Southern Wisconsin.{' '}
          <a href="https://github.com/DustinEwers">
            GitHub
          </a>
          {' | '}
          <a href="https://twitter.com/dustinjewers">
            Twitter
          </a>
          {' | '}
          <a href="http://www.linkedin.com/in/dustinewers">
            LinkedIn
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
