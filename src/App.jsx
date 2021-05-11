import * as React from 'react'
import Cards from './Cards'
import './App.css'
import Header from './Header'

const cards = [
  {
    question: 'Frage',
    textq: 'Du oder ich?',
    answer: 'Antwort',
    texta: 'Ich!',
    isBookmarked: false,
    id: 1,
  },
  {
    question: 'Frage',
    textq: 'Meins oder deins?',
    answer: 'Antwort',
    texta: 'Deins!',
    isBookmarked: true,
    id: 2,
  },
]

export default () => {
  return (
    <div className="App">
      <Header />

      {cards.map(({ id, question, textq, answer, texta, isBookmarked }) => (
        <Cards
          key={id}
          question={question}
          answer={answer}
          textq={textq}
          texta={texta}
          isBookmarked={isBookmarked}
        />
      ))}
    </div>
  )
}
