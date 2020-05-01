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

  
  

  return (
    <div>
      <h1>QuizApp</h1>
      <Question question={quiz}/>
    </div>
  )
}

export default App
