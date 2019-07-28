import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

class AboutMe extends React.Component {
    render() {
        const { data } = this.props;
        const siteTitle = data.site.siteMetadata.title
        const siteDescription = data.site.siteMetadata.description

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    meta={[{ name: 'description', content: siteDescription }]}
                    title={siteTitle}
                />
                <h2>About Me</h2>
                <p>
                    My name is Dustin Ewers. I'm a developer who builds software to help people get more done.
                </p>
                <p>
                    I started programming in 2001 (in C++). Since then, I've chosen to focus my efforts on building user friendly web applications with C#, Typescript, and ASP.NET. I also dabble in lots of other technologies because I get bored easily.
                </p>
                <p>
                    I like to focus on the human side of software development. I believe that the primary purpose of technology is to improve people's lives. At the end of the day, software is less about code and more about communicating clearly with other people.
                </p>
                <p>
                    When I'm not slinging code, I like to hang out with my family, read books (non-fiction and sci-fi), make things, and spend time in the woods.
                </p>
                <p>
                    If you wish to contact me, feel free to send me an email at:
                    dustin.ewers@gmail.com
                </p>
                <p>
                    <strong>LinkedIn:</strong><br />
                    <a href="http://www.linkedin.com/in/dustinewers">http://www.linkedin.com/in/dustinewers</a>
                </p>
                <p>
                    <strong>Github:</strong><br/>
                    <a href="https://github.com/DustinEwers">https://github.com/DustinEwers</a>
                </p>
            </Layout>
        )
    }
}

export default AboutMe

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
