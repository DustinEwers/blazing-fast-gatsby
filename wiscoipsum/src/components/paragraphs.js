import React from "react"
import PropTypes from "prop-types"

const ParagraphDisplay  = ({paragraphs}) => {
    if(!paragraphs || paragraphs.length === 0){
        return null
    }

    return <div style={{
        backgroundColor: `#FFF`,
        padding: `1rem`,
        boxShadow: `0px 0px 2px 1px rgba(107,106,107,1)`
    }}>
        {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
    </div>
}

ParagraphDisplay.propTypes = {
    paragraphs: PropTypes.array,
}
  
ParagraphDisplay.defaultProps = {
    paragraphs: [],
}

export default ParagraphDisplay