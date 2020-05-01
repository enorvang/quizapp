import React from 'react'

const Question = ({ question, handlePrevClick, handleNextClick }) => {
  //console.log("inside question.js", question)

  return (
    <div>
      {question.question}
      <ul>
        {question.alternatives.map((alt, i) => 
          <li key={i}>
            {alt}
          </li>)}
      </ul>
      <button onClick={handlePrevClick}>Forrige</button>
      <button onClick={handleNextClick}>Neste</button>
    </div>
  )

}

export default Question