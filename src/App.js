import React, { useState, useEffect } from 'react'
import quizServices from './services/quizServices'
import Question from './components/Question'


const App = () => {
  const [quiz, setQuiz] = useState([])
  const [questionIndex, setQuestionIndex] = useState(0)

  useEffect(() => {
    quizServices
      .getAll()
      .then(initialQuiz => {
        setQuiz(initialQuiz)
      })
  }, [])

  const handleNextClick = () => {
    
    if(questionIndex === quiz.length-1){
      //wrap around to beginning
      setQuestionIndex(0)
    }
    setQuestionIndex(questionIndex+1)

    console.log('quizLength: ', quiz.length)

    console.log('questionIndex: ', questionIndex)

  }
  const handlePrevClick = () => {
    
    
    if(questionIndex === 0){
      //wrap around to end
      setQuestionIndex(quiz.length-1)
    }
    
    setQuestionIndex(questionIndex - 1)
    console.log('questionIndex: ', questionIndex)
    console.log('quizLength: ', quiz.length)
  }

  const loadingtext = "Loading question..."

  const display = () => {
    if(quiz.length === 0){
      return (
        <div>{loadingtext}</div>
      )
    }else {
      return (
        <Question question={quiz[questionIndex]} 
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}/>
      )
    }
  }
  
  

  return (
    <div>
      <h1>QuizApp</h1>
      {display()}
    </div>
  )
}

export default App
