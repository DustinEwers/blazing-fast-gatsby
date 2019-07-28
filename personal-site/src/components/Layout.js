import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import MainMenu from './Menu'

import 'typeface-lato'

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    let header = (
      <div>
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h1>
        <MainMenu></MainMenu>
      </div>
      );
    
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
