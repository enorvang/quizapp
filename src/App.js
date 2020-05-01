import React, { useState, useEffect } from 'react'
import quizServices from './services/quizServices'
import Question from './components/Question'


const App = () => {
  const [quiz, setQuiz] = useState([])

  useEffect(() => {
    quizServices
      .getAll()
      .then(initialQuiz => {
        console.log(initialQuiz)
        setQuiz(initialQuiz)
      })
  }, [])

  const loadingtext = "Loading question..."

  const display = () => {
    if(quiz.length === 0){
      return (
        <div>{loadingtext}</div>
      )
    }else {
      return (
        <Question question={quiz[0]}/>
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
