import React from 'react'

const Question = ({ question }) => {
  console.log("inside question.js", question)



  return (
    <div>
      <ul>{question.map((q, i) =>
        <li key={i}>
          {q.question}
          <ul>
            {q.alternatives.map((alt, i) => 
              <li key={i}>
                {alt}
              </li>)}
          </ul>
        </li>
      )}
      </ul>
    </div>
  )
}

export default Question