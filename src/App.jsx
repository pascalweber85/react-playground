import * as React from 'react'
import Cards from './Cards'
import './App.css'

const cards = [
  { title: 'Frage', text: 'Du oder ich?', isBookmarked: false, id: 1 },
  { title: 'Frage', text: 'Meins oder deins?', isBookmarked: true, id: 2 },
]

export default () => {
  return (
    <div className="App">
      {/* <Cards title="Frage" text="Du oder ich ?" />
      <Cards title="Frage" text="Meins oder Deins?" isBookmarked /> */}

      {cards.map(({ id, title, text, isBookmarked }) => (
        <Cards key={id} title={title} text={text} isBookmarked={isBookmarked} />
      ))}
    </div>
  )
}
