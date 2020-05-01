import React from 'react'

const Question = ({ question }) => {
  console.log("inside question.js", question)

  return (
    <div>
      {question.question}
      <ul>
        {question.alternatives.map((alt, i) => 
          <li key={i}>
            {alt}
          </li>)}
      </ul>
      <button>Forrige</button>
      <button>Neste</button>
    </div>
  )

}

export default Question