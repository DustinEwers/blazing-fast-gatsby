import React from 'react'
import { Link } from 'gatsby'

class MainMenu extends React.Component {
  render() {
    return (
      <div>
        <Link to={'/'}>Articles</Link>
        {' | '}
        <Link to={'/recommended-reading'}>Recommended Reading</Link>
        {' | '}
        <Link to={'/about-me'}>About Me</Link>
      </div>
    )
  }
}

export default MainMenu
