import React, { useState } from 'react';

import IpsumForm from "../components/form"
import ParagraphDisplay from "../components/paragraphs"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import generateText from "../services/textGenerator"

const IndexPage = () => {
  const [paragraphs, setParagraphs] = useState([])

  const updateParagraphs = (number) => {
    var paragraphs = generateText(number)
    setParagraphs(paragraphs);
  }

  return <Layout>
    <SEO title="Wisco me some Ipsum" />
    <div style={{ maxWidth: `200px`, marginLeft:`auto`, marginRight:`auto`, marginBottom: `1.45rem` }}>
      <Image />
      <br />
    </div>
    <div style={{ maxWidth: `400px`, textAlign:`center`, marginLeft:`auto`, marginRight:`auto`, marginBottom: `1rem` }}>
      <IpsumForm createParagraphs={updateParagraphs} />
    </div>
    <div style={{ maxWidth: `600px`, textAlign:`justified`, marginLeft:`auto`, marginRight:`auto`, marginBottom: `2rem` }}>
      <ParagraphDisplay paragraphs={paragraphs} />
    </div>
  </Layout>
}

export default IndexPage