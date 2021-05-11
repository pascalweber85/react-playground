import * as React from 'react'
import './Cards.css'

export default function Cards({
  isBookmarked,
  question,
  textq,
  answer,
  texta,
}) {
  return (
    <section className="Cards">
      <h2>{question}</h2>
      <p>{textq}</p>
      <h2>{answer}</h2>
      <p>{texta}</p>
      <div
        role="button"
        className={
          isBookmarked
            ? 'Cards__bookmark--selected Cards__bookmark'
            : 'Cards__bookmark'
        }
        aria-label="Add bookmarks"
      ></div>
      <div className="Tags">
        <button>tag1</button>
        <button>tag2</button>
        <button>tag3</button>
        <button>tag4</button>
      </div>
    </section>
  )
}
