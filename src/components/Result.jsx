import React from 'react'

const Result = ({result}) => {
    return (
        <div className="result">
            {result || 0}
        </div>
    )
}

export default Result