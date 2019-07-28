import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

class RecommendedReading extends React.Component {
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
                <h2>Recommended Reading</h2>
                This is a list of some of the most useful and interesting reading I've come across. Most of it's tech related, but I also include other topics that are useful to software developers.
<h2 id="essays">Essays</h2>
<h3><a href="http://www.paulgraham.com/makersschedule.html">Maker's Schedule, Managers Schedule</a></h3>
This essay really hits the nail on the head when it comes to scheduling. I've made it a point to share this with all of my coworkers and it's lead to significant improvements in productivity.
<h3><a href="http://www.agilemanifesto.org/principles.html">The Principles of the Agile Manifesto</a></h3>
<h3><a href="http://pragdave.me/blog/2014/03/04/time-to-kill-agile/">Agile Is Dead (Long Live Agility)</a></h3>
The essays above describe a version of agile that is less about paperwork and more about producing working software.
It's a vision worth keeping in mind.
<h3><a href="http://blog.stackoverflow.com/2015/01/why-we-still-believe-in-private-offices/?cb=1">Why We (Still) Believe in Private Offices</a></h3>
I love how the people at Stack Exchange take care of their employees.
<h2></h2>
<h2>Stuff I've Written for Other Publications)</h2>
<h3 class="entry-title"><a href="https://simpleprogrammer.com/author/dustinewers/" target="_blank" rel="noopener">The Savvy Developer’s Guide to Resilience</a></h3>
<h3><a href="https://simpleprogrammer.com/2017/07/07/discipline-is-freedom/" target="_blank" rel="noopener">Discipline is Freedom (for Software Developers)</a></h3>
&nbsp;
<h2 id="books">Books</h2>
<h3 id="softwaredevelopment">Software Development</h3>
<h3><a href="http://www.amazon.com/exec/obidos/ASIN/020161622X/thweofdujew-20">The Pragmatic Programmer: From Journeyman to Master</a></h3>
This is my favorite programming book. It contains a ton of great advice about the craft of software development and how to become better at that craft.

Jeff Atwood has an excellent summary of the book <a href="http://blog.codinghorror.com/a-pragmatic-quick-reference">here</a>.
<h3><a href="http://www.amazon.com/exec/obidos/ASIN/B00AYQNR5U/thweofdujew-20">The Passionate Programmer: Creating a Remarkable Career in Software Development</a></h3>
This is an excellent career development book for software developers.
<h3><a href="http://www.amazon.com/exec/obidos/ASIN/0596517742/thweofdujew-20">JavaScript: The Good Parts</a></h3>
This book will change the way you think about JavaScript.
<h3><a href="http://www.amazon.com/exec/obidos/ASIN/1617292397/thweofdujew-20">Soft Skills: The software developer's life manual</a></h3>
This is an excellent career development book for software developers.
<h3><a href="http://www.amazon.com/exec/obidos/ASIN/0804137501/thweofdujew-20">Remote: Office Not Required</a></h3>
Another book from the people behind Basecamp (formerly 37 Signals). This one is about how we're moving to a world where work can be done anywhere. (I'm writing this from a coffee shop.)
<h3>Psychology</h3>
<h3><a href="http://www.amazon.com/exec/obidos/ASIN/B00E257T6C/thweofdujew-20">The Design of Everyday Things: Revised and Expanded Edition</a></h3>
This is a great read for software developers because it makes you aware of the amount of thought placed into things you interact with every day.
<h3><a href="http://www.amazon.com/exec/obidos/ASIN/B00JNYEXAM/thweofdujew-20">Brain Rules: 12 Principles for Surviving and Thriving at Work, Home, and School</a></h3>
This is a fascinating book about how the mind works and what you can do to make your mind work better.
<h3><a href="http://amzn.to/2hQ0nud">The Righteous Mind</a></h3>
One of the most important things you can do to become more innovative is empathize with and learn from people whom you disagree with. We live in a society that's increasingly polarized. This book the antidote. In the Righteous Mind, Jonathan Haidt explains the moral foundations for different political outlooks and makes a strong case for civility in political discourse.  This is a must read if you have trouble dealing with people who don't share your beliefs. The lessons in this book also apply outside of political and moral discourse. The software world is filled quasi religious arguments (.Net vs. Java, emacs vs. vim vs. IDE's, etc...) and the lessons apply to them as well.
<h3 id="title" class="a-spacing-none"><a href="http://amzn.to/2rEW1eK" target="_blank" rel="noopener"><span id="productTitle" class="a-size-extra-large">A Guide to the Good Life: The Ancient Art of Stoic Joy</span></a></h3>
Stoicism is an excellent moral operating system for software developers. Our field is chaotic and stoicism helps you thrive in that chaos. This book is my favorite introduction to stoic thinking. It's both accessible and actionable. I highly recommend this to anyone looking to lower their blood pressure.
<h3 id="title" class="a-size-large a-spacing-none"><a href="http://amzn.to/2sYbpqy" target="_blank" rel="noopener"><span id="ebooksProductTitle" class="a-size-extra-large">The Power of Habit: Why We Do What We Do in Life and Business</span></a></h3>
This is a great book if you want to learn how to reprogram your own habits.
<h3>Writing</h3>
<h3><a href="http://www.amazon.com/exec/obidos/ASIN/B007A4SDCG/thweofdujew-20">The War of Art</a></h3>
While The War of Art is a book about art, it's lessons translate well to the field of software development.
<h3><a href="http://www.amazon.com/exec/obidos/ASIN/0060891548/thweofdujew-20">On Writing Well, 30th Anniversary Edition: The Classic Guide to Writing Nonfiction</a></h3>
Communication skills are extremely important and this book will help you develop them.
<h3>Innovation</h3>
<h3><a href="http://amzn.to/2hHsoIB">Sapiens</a></h3>
Sapiens is a highly entertaining, unorthodox view of human history. Not only is it informative, it challenges basic assumptions about ideas that most people don't realize they're making. It's a great description of early human history and how we got to the modern age. It'll really open up your mind.
<h3><a href="http://amzn.to/2gNgY4v">Geography of Genius</a></h3>
Innovation is not evenly distributed. There are certain times and places throughout history that have "golden ages" of innovation. Geography of Genius explores a few of these places and tries to find what ties them all together. This book is very interesting and you'll learn about some places that you don't see much of in the classroom.
<h3><a href="http://amzn.to/2hHmLu2">Evolution of Everything</a></h3>
Unlike what the history books tell us, innovation is more bottom up than top down. Matt Ridley does a fantastic job describing how in Evolution of Everything. He covers a several major innovations including religion, money, and government. This book challenges many deeply held beliefs and illustrates how innovation is an evolutionary process.
<h3><a href="http://amzn.to/2gNgviN">Smarter Better Faster</a></h3>
This book offers a more tactical look at creativity. It's also a great guide to improving other aspects of mental performance. Charles Duhigg does a fantastic job mixing science with fascinating stories.
<h3><a href="http://amzn.to/2hvKYD7">Deep Work</a></h3>
Creativity requires concentration. A commodity in short supply in the modern age. In Deep Work, Cal Newport makes a compelling argument for making "deep work" (focused work) one of your primary priorities. I changed several of my habits after reading this one.
<h3><a href="http://amzn.to/2hHuI2r">Competing Against Luck</a></h3>
While I enjoyed the Lean Startup, I felt like it treated innovation more like a roulette wheel than a process you can influence. "Just pivot until you make it big or run out of money." In Competing Against Luck, Clayton Christensen describes a fantastic intellectual power tool for building new products. The "Jobs to Be Done" theory of innovation. If you want to build a product, I highly recommend this one.
            </Layout>
        )
    }
}

export default RecommendedReading

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
