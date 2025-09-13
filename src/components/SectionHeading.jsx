import React from 'react'

const SectionHeading = ( { text, size } ) => {
    return (
        <div className="sectionComponentHeading">
            <h2 style={{ fontSize: Number(size) }}>{text}</h2>
        </div>
    )
}

export default SectionHeading