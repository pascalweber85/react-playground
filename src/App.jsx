import * as React from 'react'
import Cards from './Cards'
import './App.css'
import Header from './Header'

const cards = [
  {
    question: 'Frage',
    textQuestion: 'Du oder ich?',
    answer: 'Antwort',
    textAnswer: 'Ich!',
    isBookmarked: false,
    isVisible: true,
    tags: ['Technik', 'Sport', 'Bio', 'Erotik'],
    id: 1,
  },
  {
    question: 'Frage',
    textQuestion: 'Meins oder deins?',
    answer: 'Antwort',
    textAnswer: 'Deins!',
    isBookmarked: true,
    isVisible: false,
    tags: ['Serien', 'Spiele', 'Wissen'],
    id: 2,
  },
]

export default () => {
  return (
    <div className="App">
      <Header />

      {cards.map(
        ({
          id,
          question,
          textQuestion,
          answer,
          textAnswer,
          isBookmarked,
          isVisible,
          tags,
        }) => (
          <Cards
            key={id}
            question={question}
            answer={answer}
            textQuestion={textQuestion}
            textAnswer={textAnswer}
            isBookmarked={isBookmarked}
            isVisible={isVisible}
            tags={tags}
          />
        )
      )}
    </div>
  )
}
