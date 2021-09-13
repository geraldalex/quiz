import React, {useState} from 'react'
import './App.css';

function App() {

  const questions = [
    {
      question: 'Какой из приведённых вариантов не является допустимым значением свойства border-style?',
      aswerQuestion: [
        { answerText: 'dotted', isCorrect: false},
        { answerText: 'inset', isCorrect: false},
        { answerText: 'glazed', isCorrect: true},
        { answerText: 'solid', isCorrect: false}
      ]
    },
    {
      question: 'Что из перечисленного не является допустимым значением длины?',
      aswerQuestion: [
        { answerText: 'cm', isCorrect: false},
        { answerText: 'dm', isCorrect: true},
        { answerText: 'em', isCorrect: false},
        { answerText: 'mm', isCorrect: false}
      ]
    },
    {
      question: 'Какой селектор позволяет вам обратиться к каждому элементу веб-страницы?',
      aswerQuestion: [
        { answerText: '*', isCorrect: true},
        { answerText: '.', isCorrect: false},
        { answerText: '#', isCorrect: false},
        { answerText: 'id', isCorrect: false}
      ]
    },
    {
      question: 'Какое свойство позволяет вам спрятать элемент, но сохранить занимаемое им пространство на странице? ',
      aswerQuestion: [
        { answerText: 'visibility или opacity', isCorrect: true},
        { answerText: 'display none', isCorrect: false}
       
      ]
    },
    {
      question: 'В CSS есть 16 основных названий для цвета. Какое из перечисленных названий к ним не принадлежит?',
      aswerQuestion: [
        { answerText: 'olive', isCorrect: false},
        { answerText: 'fuchsia', isCorrect: false},
        { answerText: 'cyan', isCorrect: true},
        { answerText: 'maroon', isCorrect: false}
      ]
    },
    {
      question: 'У какого из двух селекторов большая специфичность?',
      aswerQuestion: [
        { answerText: '#object h2::first-letter', isCorrect: true},
        { answerText: 'body .item div h2::first-letter:hover', isCorrect: false}
       
      ]
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleAnswerOptionClick = (isCorrect) => {
    if(isCorrect){
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1

    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion)
    }else{
      setShowScore(true)
    }
  }

  const refresh = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }

           return (
  <div className='app'>


  {
    showScore
    ?   <div className='section_score'>
 <div> Правильных ответов {score} из {questions.length} </div>
 <button 
 onClick={refresh}
 className='refresh_btn'>Попробовать еще раз</button>
  </div>
  :  <div className='quiz'>
  <div className='question_section'>
    <div className='question_count'>
<span>Вопрос {currentQuestion + 1}</span> / {questions.length}
    </div>
    <div className='question_text'>{questions[currentQuestion].question}</div>
  </div>
  <div className='answer_section'>
 {
  questions[currentQuestion].aswerQuestion.map((item)=>(
<button
onClick={()=>handleAnswerOptionClick(item.isCorrect)}
>{item.answerText}</button>
  ))
 }
    
  </div>
  </div>
  }

  </div>
  );
}

export default App;

